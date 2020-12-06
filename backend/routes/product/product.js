const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, addProduct} = require('../../controllers/product')



router.get("/:id",  getProductById);
router.get("/", getAllProduct);
router.post("/signup", addProduct);

module.exports = router;
