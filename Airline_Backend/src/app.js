const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const CityRepository=require('./repository/city-repository')
dotenv.config()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT
app.listen(PORT,  async() => {
    console.log(`Succesfully started at PORT:${PORT}`)

    //creating cities
    const repo=new CityRepository()
   await repo.createCity({name:"New Delhi"})
   await repo.createCity({name:"Jaiselmair"})
   await repo.createCity({name:"Kochi"})
   await repo.createCity({name:"Jaipur"})
   await repo.createCity({name:"Ahemdabad"})

    //deleteing cities

//    await repo.deleteCity(8)
//    await repo.deleteCity(9)
//    await repo.deleteCity(10)
//    await repo.deleteCity(11)
//    await repo.deleteCity(12)
//    await repo.deleteCity(13)
//    await repo.deleteCity(26)
//    await repo.deleteCity(31)
//    await repo.deleteCity(10)

})