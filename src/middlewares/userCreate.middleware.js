const { User } = require('../models');

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}

module.exports = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' }); 
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' }); 
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  const user = await User.findOne({ where: { email } });
  
  if (user !== null) {
    return res.status(409)
      .json({ message: 'User already registered' }); 
  }

  return next();
};