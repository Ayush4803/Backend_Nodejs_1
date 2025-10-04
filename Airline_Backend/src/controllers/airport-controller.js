const { AirportRepository } = require('../repository'); // adjust path
const airportRepository = new AirportRepository();

async function create(req, res) {
    try {
        const response = await airportRepository.create(req.body);

        return res.status(200).json({
            success: true,
            message: "Airport created successfully",
            data: response,
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in airport-controller (create):", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create airport",
            data: {},
            error: error.message
        });
    }
}

module.exports = {
    create
};
