const express = require("express");
const router = express.Router();
const {getUser, getAllUser, addUser} = require('../../controllers/user')
//const auth = require("../../middlewares/isAuth");


router.get("/:id",  getUser);
router.get("/", getAllUser);
router.post("/signup", addUser);

module.exports = router;
