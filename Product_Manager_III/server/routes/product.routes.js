const ProductController = require('../controllers/product.controller');

const {
    createProduct,
    updateProduct,
    findAllProducts,
    findSingleProduct,
    deleteProduct
}
= ProductController

module.exports = (app) => {
    app.post('/api/addProduct', createProduct);
    app.put('/api/update/:id', updateProduct);
    app.get('/api/allProducts', findAllProducts);
    app.get('/api/product/:id', findSingleProduct);
    app.delete('/api/delete/:id', deleteProduct);
}