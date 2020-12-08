const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, addProduct, editProduct, deleteProduct, upload} = require('../../controllers/product')



router.get("/:id",  getProductById);
router.get("/", getAllProduct);
router.post("/add", upload, addProduct);
router.put("/edit/:id", upload, editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
