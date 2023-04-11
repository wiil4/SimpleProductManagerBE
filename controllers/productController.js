const Product = require("../models/Product");

exports.addProduct = async (req,res) =>{
    try{
        let product;
        product = new Product(req.body);
        await product.save();
        res.send(product);

    }catch(error){
        console.log(error.message);
        res.status(500).send('Error trying to insert new data');
    }
}

exports.getProducts = async (req,res) =>{
    try {
        const products = await Product.find();
        res.json(products);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error getting data');
    }
}

exports.updateProduct = async (req,res) =>{
    try {
        const {name, category, location, price} = req.body;
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({msg:'Product doesnt exist'});
        }
        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;

        product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new: true});
        res.json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error updating data ');
    }
}

exports.getProduct = async (req,res) =>{
    try {
        const product = await Product.findById({_id: req.params.id});

        if(!product){
            res.status(404).json({msg:'Product doesnt exist'});
        }
        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error getting data');
    }
}

exports.deleteProduct = async(req,res) =>{
    try {
        const product = await Product.findById({_id: req.params.id});

        if(!product){
            res.status(404).json({msg:'Product doesnt exist'});
        }
        
        await Product.findByIdAndRemove({_id:req.params.id});
        
        res.json({msg: 'Correctly deleted'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error trying to delete given data');
        
    }
}