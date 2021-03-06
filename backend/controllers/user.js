const User = require("../models/user");
const { success, fail, validation } = require("../utils/helper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../utils/key");
const _ = require("lodash");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(success("OK", { data: users }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(success("OK", { data: user }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.addUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(501).json(validation("Please input all field"));
    }

    let preUser = await User.findOne({ where: { email: req.body.email } });
    if (preUser)
      return res
        .status(501)
        .json(validation({ email: "User already registered." }));

    const picked = _.pick(req.body, ["name", "email", "password"]);

    const user = await User.create(picked);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      jwtKey,
      {
        expiresIn: 3600,
      }
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

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};
