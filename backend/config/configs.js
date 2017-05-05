module.exports = {
    database: 'mongodb://localhost:27017/shopping',
    secret: 'your_secret',
    productImage: {
        default: './uploads/products/default.png',
        dir: './uploads/products',
        maxFileSize: 2 * 1024 * 1024 * 1024,
        acceptedMimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
    }
}

