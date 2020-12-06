const Product = require("../models/product");
const { success, fail, validation } = require("../utils/helper");
const _ = require("lodash");

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(success("OK", { data: products }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.status(200).json(success("OK", { data: product }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.addProduct = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    if (!name || !description || !price) {
      return res.status(501).json(validation("Please input all field"));
    }


   
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};
