const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//POST//api/products
router.post('/', productController.addProduct);

//GET//api/products
router.get('/', productController.getProducts);

//PUT//api/products/id
router.put('/:id', productController.updateProduct);

//GET//api/products/id
router.get('/:id',productController.getProduct);

//DELETE//api/products/id
router.delete('/:id',productController.deleteProduct);

module.exports = router;