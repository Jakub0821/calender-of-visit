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

// Route to get all appointments
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete an appointment
router.delete('/appointments/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment cancelled successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to confirm an appointment
router.patch('/appointments/:id/confirm', async (req, res) => {
    try {
        const confirmedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { confirmed: true }, { new: true });
        if (!confirmedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(confirmedAppointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
