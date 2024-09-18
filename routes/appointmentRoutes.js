const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Route to create a new appointment
router.post('/appointments', (req, res) => {
    const newAppointment = new Appointment({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
    });

    newAppointment.save()
        .then(appointment => res.status(201).json(appointment))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Export the router
module.exports = router;
