const express = require('express');
const app = express();
const dotenv= require('dotenv')
dotenv.config();

PORT=process.env.PORT

 function Airline_Auth(){
    app.listen(PORT,()=>{
        console.log(`Succesfully Started PORT:${PORT}`)
    })
}

Airline_Auth()