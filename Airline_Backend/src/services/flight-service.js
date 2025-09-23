const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            // Fetch the airplane
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);

            // Handle missing airplane
            if (!airplane) {
                throw new Error(`Airplane with ID ${data.airplaneId} not found`);
            }

            // Create the flight using airplane's capacity
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.log("Something went wrong in services");
            throw error; // propagate the original error
        }
    }
}

module.exports = FlightService;
