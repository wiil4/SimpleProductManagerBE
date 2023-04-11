const Product = require("../models/Product");

exports.addProduct = async (req,res) =>{
    try{
        let product;
        product = new Product(req.body);
        await product.save();
        res.send(product);

    }catch(error){
        console.log(error.message);
        res.status(500).send('There was an error');
    }
}