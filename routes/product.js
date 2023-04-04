const express = require('express');

const router = express.Router();

//api/products
router.post('/',() =>{
    console.log('Creating product..');
});

module.exports = router;