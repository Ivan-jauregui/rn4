const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
}

module.exports = {
  generateToken,
};
