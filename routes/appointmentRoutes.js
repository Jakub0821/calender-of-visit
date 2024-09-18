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

// Route to get all appointments (Trasa GET do pobrania wszystkich wizyt)
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();  // Znajdź wszystkie wizyty w bazie danych
        res.status(200).json(appointments);  // Zwróć wizyty jako odpowiedź JSON
    } catch (err) {
        res.status(500).json({ error: err.message });  // Jeśli coś poszło nie tak, zwróć błąd
    }
});

// Export the router
module.exports = router;
