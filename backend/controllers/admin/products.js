var config = require('./../../config/configs');
var Product = require('../../models/product');
var multer = require('multer');
var upload = multer({
    dest: config.productImage.dir,
    limits: {
        fileSize: config.productImage.maxFileSize,
    },
    fileFilter: function (req, file, cb) {
        if (config.productImage.acceptedMimeTypes.indexOf(file.mimetype.toLowerCase()) != -1)
            cb(null, true)
        else
            cb('Image type not accepted');
    }
})

module.exports = {
    index: function (req, res) {
        Product.getAll({}, function (products) {
            res.json(products);
        })
    },
    get: function (req, res) {
        Product.getById(req.params.id, function (products) {
            res.json(products);
        })
    },
    delete: function (req, res) {
        Product.deleteById(req.params.id, function () {
            res.json(true);
        })
    },
    save: function (req, res) {
        console.log(req.body)
        upload.single("upload")(req, res, function (err) {
            if (err) {
                res.send(err);
            }
            else {
                // check request body errors
                req.checkBody({
                    'title': {
                        notEmpty: {
                            errorMessage: 'Title required'
                        },
                        isLength: {
                            options: [{min: 4}],
                            errorMessage: 'Title minlength 4 character'
                        }
                    },
                    'description': {
                        notEmpty: {
                            errorMessage: 'Description required'
                        },
                        isLength: {
                            options: [{min: 4}],
                            errorMessage: 'Description minlength 4 character'
                        }
                    },
                    'price': {
                        matches: {
                            options: [/^(\d+(\.\d+)?)$/, 'i'],
                            errorMessage: 'Price not valid'
                        },
                    },
                });
                req.getValidationResult().then(function (result) {
                    var reqErrors = result.useFirstErrorOnly().array();
                    if (reqErrors.length > 0) {
                        var messages = [];
                        reqErrors.forEach(function (error) {
                            messages.push(error.msg);
                        });
                        res.status(400).json({success: false, errors: messages});
                    }
                    else {
                        if (req.params.id) {
                            // update old object
                            Product.getById(req.params.id, function (product) {
                                if (product) {
                                    product.title = req.body.title;
                                    product.description = req.body.description;
                                    product.price = req.body.price;
                                    if (req.file) {
                                        product.imagePath = req.file.filename;
                                    }
                                    product.save(function (err, doc) {
                                        if (err) throw err;
                                        res.status(200).json({success: true, product: doc});
                                    });
                                }
                            })
                        }
                        else {
                            //save the product
                            var prodcut = new Product({
                                title: req.body.title,
                                description: req.body.description,
                                price: req.body.price,
                                imagePath: req.file.filename
                            })
                            prodcut.save(function (err, doc) {
                                if (err) throw err;
                                res.status(200).json({success: true, product: doc});
                            });
                        }
                    }
                })
            }
        })
    }
}