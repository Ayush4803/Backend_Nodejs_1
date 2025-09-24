const express = require('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.delete('/city/:id', CityController.destroy);
router.get('/city', CityController.getAllCities);
router.post('/flight', FlightController.create);
router.post('/airport',AirportController.create)

module.exports = router;
