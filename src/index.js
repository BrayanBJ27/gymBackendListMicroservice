const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8089;

// Middleware
app.use(cors());
app.use(express.json());

// Configure the database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Route to get the list of reservations
app.get('/reservations', (req, res) => {
    const selectQuery = 'SELECT * FROM machine_reservations';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching reservations:', err);
            res.status(500).send({ message: 'Error fetching reservations', error: err });
            return;
        }
        const formattedResults = results.map((reservation) => {
            let startTime = null;
            let endTime = null;

            if (reservation.start_time) {
                try {
                    startTime = new Date(reservation.start_time).toISOString().replace('T', ' ').substring(0, 19);
                } catch (error) {
                    console.error('Invalid start_time value:', reservation.start_time);
                }
            }
                
            if (reservation.end_time) {
                try {
                    endTime = new Date(reservation.end_time).toISOString().replace('T', ' ').substring(0, 19);
                } catch (error) {
                    console.error('Invalid end_time value:', reservation.end_time);
                }
            }
                
            return {
                id: reservation.id,
                machineName: reservation.machine_name,
                userName: reservation.user_name,
                startTime,
                endTime
            };
        });
        res.send(formattedResults);
    });
});

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server Running');
});

app.listen(port, () => {
    console.log(`Machines service listening at http://localhost:${port}`);
});
