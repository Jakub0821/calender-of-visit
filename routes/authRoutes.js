const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const router = express.Router();

// Ścieżki logowania i rejestracji
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
