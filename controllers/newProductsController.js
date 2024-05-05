const newProducts = require('../models/newProductsModel');

// getAllNewProducts 
const getAllNewProducts = async (req, res)=>{
    try {
        const productsData = await newProducts.find();
        res.status(200).json({
            message : "Get All Products",
            data : productsData,
            success : true
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// getSingleProduct
const getSingleProduct = async (req, res)=>{
    try {
        const id = req.params.id;
        const productData = await newProducts.findOne({_id:id});
        res.status(200).json({
            message : "Get Single Product",
            success : true,
            data : productData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// createProduct 
const createProduct = async (req, res)=>{
    try {
        const {title, description, price, image, rating, stock, brand, category} = req.body;
        const newProduct = new newProducts({
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
            message : "created product",
            success : true,
            data : productData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// updateProduct 
const updateProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const {title, description, price, image, category, brand, stock, rating} = req.body;
        const productData = await newProducts.findByIdAndUpdate({_id:id});
        productData.title = title;
        productData.description = description;
        productData.price = price;
        productData.image = image;
        productData.category = category;
        productData.brand = brand;
        productData.stock = stock;
        productData.rating = rating;
        
        await productData.save();
        res.status(200).json({
            message : "Product updated",
            success : true,
            data : productData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
// deleteProduct 
const deleteProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const productData = await newProducts.findByIdAndDelete({_id:id});
        res.status(200).json({
            message : "Deleted Product",
            success : true,
            data : productData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {getAllNewProducts, getSingleProduct, createProduct, deleteProduct, updateProduct}