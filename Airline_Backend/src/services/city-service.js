const CityRepository = require('../repository/city-repository');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        if (!data.name) throw new Error("City name is required");
        return await this.cityRepository.createCity(data.name);
    }

    async deleteCity(cityId) {
        return await this.cityRepository.deleteCity(cityId);
    }

    async updateCity(cityId, data) {
        return await this.cityRepository.updateCity(cityId, data);
    }

    async getCity(cityId) {
        return await this.cityRepository.getCity(cityId);
    }

    async getAllCities(filter) {
        return await this.cityRepository.getAllCities(filter);
    }
}

module.exports = CityService;
