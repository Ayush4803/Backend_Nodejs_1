const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
// const CityRepository=require('./repository/city-repository')
dotenv.config()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT
app.listen(PORT,  async() => {
    console.log(`Succesfully started at PORT:${PORT}`)

    //creating cities
    // const repo=new CityRepository()
//    await repo.createCity({name:"New Delhi"})
//    await repo.createCity({name:"Jaiselmair"})
//    await repo.createCity({name:"Kochi"})
//    await repo.createCity({name:"Jaipur"})
//    await repo.createCity({name:"Ahemdabad"})

    //deleteing cities

//    await repo.deleteCity(47)
//    await repo.deleteCity(48)
//    await repo.deleteCity(49)
//    await repo.deleteCity(50)
//    await repo.deleteCity(51)
 

})