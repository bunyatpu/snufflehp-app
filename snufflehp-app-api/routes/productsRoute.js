
var express = require('express');
var productsRoute = express.Router();
var prodController = require('../controllers/productController')
var auth = require('../middleware/auth')


productsRoute.use('/load_products_all', prodController.loadAllProducts);
productsRoute.use('/load_products_new', prodController.loadNewProducts);
productsRoute.use('/load_other_new', prodController.loadNewOther);
productsRoute.use('/load_product_detail', prodController.loadProductDetail);
productsRoute.use('/update_cart',auth.reqAuth, prodController.updateOrderCart);
productsRoute.use('/load_carts',auth.reqAuth, prodController.loadCartOrder);
productsRoute.use('/delete_cart',auth.reqAuth, prodController.deleteOrderCart);


module.exports = productsRoute;
