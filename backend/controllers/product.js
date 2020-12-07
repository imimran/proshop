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
    const title = req.body.title;
    const image = req.body.image;
    const brand = req.body.brand;
    const category = req.body.category;
    const description = req.body.description;
    const numReviews = req.body.numReviews;
    const rating = req.body.rating;
    const price = req.body.price;
    const inStock = req.body.inStock;
    

    if (!title || !image || !brand || !category ||  !description || !numReviews || !rating || !price || !inStock) {
      return res.status(501).json(validation("Please input all field"));
    }

    const product = await Product.create({
      title: title,
      image: image,
      brand: brand,
      category: category,
      description: description,
      numReviews: numReviews,
      rating: rating,
      price: price,
      inStock: inStock
    })
     res.status(200).json(success("OK", { data: product }, res.statusCode));
   
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.editProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const image = req.body.image;
    const brand = req.body.brand;
    const category = req.body.category;
    const description = req.body.description;
    const numReviews = req.body.numReviews;
    const rating = req.body.rating;
    const price = req.body.price;
    const inStock = req.body.inStock;

     if (
       !title ||
       !image ||
       !brand ||
       !category ||
       !description ||
       !numReviews ||
       !rating ||
       !price ||
       !inStock
     ) {
       return res.status(501).json(validation("Please input all field"));
     }


    const editProduct = await Product.update(
      {
        title: title,
        image: image,
        brand: brand,
        category: category,
        description: description,
        numReviews: numReviews,
        rating: rating,
        price: price,
        inStock: inStock,
      },
      {
        where: { id: req.params.id },
      }
    );
    res
      .status(200)

      .json(success("Edit Successfully", { data: "success" }, res.statusCode));
  } catch (error) {
    console.log(error);
    res.status(501).json(fail(error, res.statusCode));
    return;
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json(success("Remove Product", { data: "Success" }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(501).json(fail(error, res.statusCode));
    return;
  }
};

