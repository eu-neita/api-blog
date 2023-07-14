const jwt = require('jsonwebtoken');
// const User = require('../models');

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
  jwt.verify(extractToken(token), secret);

      // const user = await User.findOne({ where: { ...decoded.data.email } });

    // if (!user) {
    //   return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    // }

    // req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};