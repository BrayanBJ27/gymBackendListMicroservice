const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // Route to get the list of machine reservations
    router.get('/', (req, res) => {
        const selectQuery = 'SELECT * FROM machine_reservations';
        db.query(selectQuery, (err, results) => {
            if (err) {
                console.error('Error fetching reservations:', err);
                return res.status(500).json({ message: 'Error fetching reservations', error: err });
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
            res.json(formattedResults);
        });
    });

    return router;
};
