const Sequelize = require("sequelize");
const sequelize = require("../utils/db");
const Product = require("./product");
const User = require("./user");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },

  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  qty: { 
      type: Sequelize.INTEGER,
       defaultValue: "1" 
    },
});

module.exports = Cart;
