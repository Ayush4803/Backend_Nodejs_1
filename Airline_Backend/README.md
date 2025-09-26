✈️ Airline Backend

A beginner-friendly Airline Management Backend built with Node.js, Express, MySQL, and Sequelize ORM.
This project helps manage cities, airports, flights, and bookings in a structured way.

📖 Table of Contents

✨ Overview

🔥 Features

🛠 Tech Stack

⚡ Setup & Installation

🗄 Database Models

📡 API Endpoints

🤝 Contributing

📜 License

✨ Overview

The Airline Backend is designed to simulate an airline management system where you can:

Create and manage cities & airports

Add and schedule flights

Book tickets for passengers

Fetch flight schedules easily

This project is perfect for beginners to Node.js + MySQL + Sequelize who want to practice backend development with real-world use cases.

🔥 Features

✅ Manage Cities (add, update, delete)
✅ Manage Airports (link airports to cities)
✅ Manage Flights (schedule, update, delete flights)
✅ Book flights for passengers
✅ Fetch flight schedules & details

🛠 Tech Stack

Node.js – Runtime environment

Express.js – Backend framework

MySQL – Relational database

Sequelize ORM – Database abstraction

dotenv – Manage environment variables

body-parser – Parse incoming requests

Nodemon – Auto-restart server in dev mode

⚡ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/airline-backend.git
cd airline-backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root folder:

PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=airline_db
DB_DIALECT=mysql

4️⃣ Setup Database

Make sure MySQL is running, then run migrations:

npx sequelize db:create
npx sequelize db:migrate

5️⃣ Start the Server
npm run dev


Server will start at 👉 http://localhost:3000

🗄 Database Models

City → (id, name)

Airport → (id, name, cityId)

Flight → (id, flightNumber, departure, arrival, time, price)

Booking → (id, flightId, passengerName, seatNumber)

📡 API Endpoints
🏙 Cities

POST /cities → Add a new city

GET /cities → Fetch all cities

PUT /cities/:id → Update a city

DELETE /cities/:id → Delete a city

🛫 Airports

POST /airports → Add a new airport

GET /airports → Fetch all airports

✈ Flights

POST /flights → Schedule a flight

GET /flights → Get all flights

PUT /flights/:id → Update flight details

DELETE /flights/:id → Delete a flight

🎟 Bookings

POST /bookings → Book a ticket

GET /bookings/:id → Get booking details

🤝 Contributing

Contributions are welcome!
Feel free to fork this repo, create a new branch, and submit a pull request.

📜 License

This project is licensed under the MIT License.

🌟 If you like this project, don’t forget to star the repo ⭐ on GitHub!