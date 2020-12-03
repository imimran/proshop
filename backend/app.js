const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./utils/db')
const cors = require('cors')
const app = express()

const userRouter = require('./routes/user/user')




app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())


app.use('/api/user', userRouter)


const port = process.env.PORT || 5000 ;


(async () =>{
    await sequelize.sync({ alter: true })
    //await sequelize.sync()
    app.listen( port, () => 
    console.log(`Server Running on port ...${port}`)
    )

})()

