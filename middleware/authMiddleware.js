const jwt = require('jsonwebtoken');

// Middleware weryfikujący token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Pobieranie tokenu po "Bearer"

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  // Weryfikacja tokenu JWT
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user; // Przechowywanie zweryfikowanego użytkownika w żądaniu
    next();
  });
};

module.exports = authenticateToken;
