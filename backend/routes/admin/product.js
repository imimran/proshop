const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, addProduct, editProduct, deleteProduct} = require('../../controllers/product')



router.get("/:id",  getProductById);
router.get("/", getAllProduct);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
