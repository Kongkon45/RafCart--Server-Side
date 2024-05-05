const Products = require("../models/topProductsModel");

// getAllProducts 
const getAllProducts = async(req, res)=>{
    try {
        const productsData = await Products.find();
        res.status(200).json({
            message : "All Products",
            success : true,
            data : productsData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// singleProduct 
const singleProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const productData = await Products.findOne({_id : id});
        res.status(200).json({
            message : "Single Product",
            success : true,
            data : productData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// createProduct 
const createProduct = async(req, res)=>{
    try {
        const {title, description, price, image, rating, stock, brand, category} = req.body;
        const newProduct = new Products({
            title, 
            description,
            price,
            image,
            rating,
            stock,
            brand,
            category
            
        })
        const productData = await newProduct.save();
        res.status(200).json({
            message : "Created Product",
            data : productData,
            success : true
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// updateProduct 
const updateProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const {title, price, description, image, brand, rating, stock, category} = req.body;
        const productData = await Products.findByIdAndUpdate({_id:id });
        productData.title = title;
        productData.price = price;
        productData.description = description;
        productData.image = image;
        productData.brand = brand;
        productData.rating = rating;
        productData.stock = stock;
        productData.category = category;
        
        await productData.save();
        res.status(200).json({
            message : "Product Updated",
            data : productData,
            success : true
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// deleteProduct 
const deleteProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const productData = await Products.findByIdAndDelete({_id : id});
        res.status(200).json({
            message : "Deleted Product",
            data : productData,
            success : true
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {getAllProducts, singleProduct, createProduct, deleteProduct, updateProduct}