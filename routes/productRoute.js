const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router
    .route('')
    .get(productController.getAllProducts)
    .post(productController.createProduct)

router.route('/static').get(productController.getAllProductStatic)



module.exports = router;