const CityService = require('../services/city-service');
const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({ success: true, message: "City created", data: city });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot create city", error: error.message });
    }
};

const destroy = async (req, res) => {
    try {
        await cityService.deleteCity(req.params.id);
        res.status(200).json({ success: true, message: "City deleted", data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot delete city", error: error.message });
    }
};

const update = async (req, res) => {
    try {
        await cityService.updateCity(req.params.id, req.body);
        res.status(200).json({ success: true, message: "City updated", data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot update city", error: error.message });
    }
};

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        res.status(200).json({ success: true, message: "City fetched", data: city });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot fetch city", error: error.message });
    }
};

const getAllCities = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        res.status(200).json({ success: true, message: "Cities fetched", data: cities });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot fetch cities", error: error.message });
    }
};

module.exports = { create, destroy, update, get, getAllCities };
