const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const ApiRoutes= require('./routes/index')

dotenv.config()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api',ApiRoutes)
const PORT = process.env.PORT
app.listen(PORT,  async() => {
    console.log(`Succesfully started at PORT:${PORT}`)
})