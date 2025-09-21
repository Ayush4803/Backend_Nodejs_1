const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            // Pass the string instead of object
            const city = await this.cityRepository.createCity(data.name);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error; // throw original error
        }
    }

    async deleteCity(cityId) {
        try {
            return await this.cityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            return await this.cityRepository.updateCity(cityId, data);
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async getCity(cityId) {
        try {
            return await this.cityRepository.getCity(cityId);
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = CityService;
