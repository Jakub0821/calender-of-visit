const express = require('express'); 
const router = express.Router();
const Appointment = require('../models/appointment');
const authenticateToken = require('../middleware/authMiddleware'); // Import middleware do weryfikacji JWT

// Get all appointments (Zabezpieczone JWT)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new appointment (Zabezpieczone JWT)
router.post('/', authenticateToken, async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an appointment (Zabezpieczone JWT)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.name = req.body.name;
    appointment.date = req.body.date;
    appointment.time = req.body.time;
    appointment.description = req.body.description;

    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an appointment (Zabezpieczone JWT)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    await appointment.remove();
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
