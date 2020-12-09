const { Sequelize, Model } = require("sequelize");
const sequelize = require("../utils/db");
const Category = require("../models/category");
const SubCategory = require("../models/subCategory");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numReviews: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  inStock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },

  subcategoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: SubCategory,
      key: "id",
    },
  },
});
module.exports = Product; 
