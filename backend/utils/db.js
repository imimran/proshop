const Sequelize = require('sequelize')
const sequelize = new Sequelize("proshop", "root", "@capTain100", {
  dialect: "mysql",
  host: "localhost",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+06:00",
});

module.exports = sequelize