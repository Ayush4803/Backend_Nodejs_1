const { Op } = require('sequelize');
const { City } = require('../models');

class CityRepository {
    async createCity(name) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error("Repository error (createCity):", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({ where: { id: cityId } });
            return true;
        } catch (error) {
            console.error("Repository error (deleteCity):", error);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const updated = await City.update(data, { where: { id: cityId } });
            return updated;
        } catch (error) {
            console.error("Repository error (updateCity):", error);
            throw error;
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.error("Repository error (getCity):", error);
            throw error;
        }
    }

    async getAllCities(filter = {}) {
        try {
            const where = filter.name
                ? { name: { [Op.startsWith]: filter.name } }
                : {};
            const cities = await City.findAll({ where });
            return cities;
        } catch (error) {
            console.error("Repository error (getAllCities):", error);
            throw error;
        }
    }
}

module.exports = CityRepository;
