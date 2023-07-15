const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  if (!bearerToken.includes('Bearer')) return bearerToken;
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
  const { data: email } = jwt.verify(extractToken(token), secret);

    const { dataValues } = await User.findOne({ where: { email } });
    req.userId = dataValues.id;
    console.log('log: ', dataValues.id);
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};