const { Flight } = require('../models/index'); // use singular 'Flight'

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong inside repository");
            throw error; // make sure you throw the error
        }
    }

    // other CRUD methods can be added here
}

module.exports = FlightRepository;
