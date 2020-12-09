const { Sequelize } = require("sequelize");
const sequelize = require("../utils/db");
const Category = require("../models/category");

const SubCategory = sequelize.define("subcategory", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
});

module.exports = SubCategory;
