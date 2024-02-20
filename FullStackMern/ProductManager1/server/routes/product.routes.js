const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.findAllProduct);
    app.get('/api/products/:id', ProductController.findSingleProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);

    
}


