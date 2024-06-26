const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (data) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data }, secret, jwtConfig);
    return token;
};