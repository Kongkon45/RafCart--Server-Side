const express = require("express");
const { getAllNewProducts, getSingleProduct, createProduct, deleteProduct, updateProduct } = require("../controllers/newProductsController");
const router = express.Router();

router.get("/products", getAllNewProducts);
router.get("/products/:id", getSingleProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


module.exports = router;