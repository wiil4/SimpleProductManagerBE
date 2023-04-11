const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//POST//api/products
router.post('/', productController.addProduct);

//GET//api/products
router.get('/', productController.getProducts);

router.put('/:id', productController.updateProduct);

module.exports = router;