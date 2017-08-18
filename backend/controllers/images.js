var configs = require('../config/configs');
var fs = require('fs');
var Jimp = require("jimp");

module.exports = {
    showProduct: function (req, res) {
        var original = configs.productImage.dir + '/' + req.query.i;
        var defualtImg = configs.productImage.default; // the default in case image not exist

        Jimp.read(original, function (err, lenna) {
            if (err) {
                // send the default in case error happened in image
                Jimp.read(defualtImg, function (err, lenna) {
                    lenna.resize(570, req.query.w | 280)            // resize
                        .quality(70)                 // set JPEG quality
                        .getBuffer(Jimp.AUTO, function (err, buffer) {
                            if (err) throw  err;
                            res.writeHead(200, {'Content-Type': 'image/jpeg'});
                            res.end(buffer, 'binary');
                        });
                });
            }
            else {
                lenna.resize(570, req.query.w | 280)            // resize
                    .quality(70)                 // set JPEG quality
                    .getBuffer(Jimp.AUTO, function (err, buffer) {
                        if (err) throw  err;
                        res.writeHead(200, {'Content-Type': 'image/jpeg'});
                        res.end(buffer, 'binary');
                    });
            }

        });
    }
};
