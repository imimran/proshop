const express = require("express");
const router = express.Router();
const {
 getAllCategory,getCategoryById, addCategory
} = require("../../controllers/category");

router.get("/:id", getCategoryById);
router.get("/", getAllCategory );
router.post("/add", addCategory);
// router.put("/edit/:id", upload, editProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;
