const SubCategory = require("../models/subCategory");
const { success, fail, validation } = require("../utils/helper");

exports.getAllSubCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.findAll();
    res.status(200).json(success("OK", { data: subCategories }, res.statusCode));
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByPk(req.params.id);
    res.status(200).json(success("OK", { data: subCategory }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.addSubCategory = async (req, res) => {
  try {
    const name = req.body.name;
    const categoryId = req.body.categoryId

    if (!name) {
      res.status(501).json(validation("Please input name field"));
    }

    const subCategory = await SubCategory.create({
      name: name,
      categoryId: categoryId
    });
    res.status(200).json(success("OK", { data: subCategory }, res.statusCode));
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};
