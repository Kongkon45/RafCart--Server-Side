const express = require("express");
const { getAllProducts, singleProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/topProductsController");
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", singleProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;