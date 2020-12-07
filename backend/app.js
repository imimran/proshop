const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./utils/db')
const cors = require('cors')
const app = express()

//Routers
const userRouter = require('./routes/user/user')
const authRouter = require("./routes/user/auth");
const productRouter = require('./routes/admin/product')



//Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())


app.use('/api/user', userRouter)
app.use("/api/auth", authRouter);
app.use('/api/product/', productRouter)


const port = process.env.PORT || 5000 ;

//Connect Database
(async () =>{
    await sequelize.sync({ alter: false })
    //await sequelize.sync()
    app.listen( port, () => 
    console.log(`Server Running on port ...${port}`)
    )

})()

