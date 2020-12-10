const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./utils/db')
const cors = require('cors')
const app = express()
const path = require("path");

//Models
const Category = require('./models/category')
const SubCategory = require("./models/subCategory");
const Product = require("./models/product");
const Cart = require("./models/cart");
const User = require('./models/user')

//Routers
const userRouter = require('./routes/user/user')
const authRouter = require("./routes/user/auth");
const productRouter = require('./routes/admin/product')
const categoryRouter = require("./routes/admin/category");
const subCategoryRouter = require("./routes/admin/subCategory");





//Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.use(express.static(__dirname + "./uploads"));
app.use("/uploads", express.static("./uploads"));


app.use('/api/user', userRouter)
app.use("/api/auth", authRouter);
app.use('/api/product', productRouter)
app.use("/api/category", categoryRouter);
app.use("/api/sub", subCategoryRouter);


const port = process.env.PORT || 5000 ;

//Connect Database
(async () =>{
    await sequelize.sync({ alter: true });
    //await sequelize.sync()
    app.listen( port, () => 
    console.log(`Server Running on port ...${port}`)
    )

})()


User.hasOne(Cart);
Cart.belongsTo(User);

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);

SubCategory.hasMany(Product);
Product.belongsTo(SubCategory);






