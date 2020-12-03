const express = require("express");
const User = require("../../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../../utils/key");
const bcrypt = require("bcrypt");
const { validation, success } = require("../../utils/helper");


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(501).json(validation("please add email or password"));
  }

  let user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(501).json(validation("User Not registered."));


  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(501).json(validation("Invalid email or password "));

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin
    },
    jwtKey
  );
  res.status(200).json(
    success(
      "Your Token! ",
      {
        data: token,
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
        
      },
      res.statusCode
    )
  );
});

module.exports = router;
