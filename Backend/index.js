const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const connectDB = require('./connection/connection')
connectDB()



const productsRoute = require('./routes/products.js')
app.use('/products', productsRoute)


app.listen(process.env.port, () => {
    console.log("Server is up and running already at " + process.env.port )
})