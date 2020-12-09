const express = require("express");
const router = express.Router();
const {
  getAllSubCategory,
  getSubCategoryById,
  addSubCategory,
} = require("../../controllers/subCategory");

router.get("/:id", getSubCategoryById);
router.get("/", getAllSubCategory);
router.post("/add", addSubCategory);
// router.put("/edit/:id", upload, editProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;
