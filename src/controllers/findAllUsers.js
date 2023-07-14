const { User } = require('../models');

module.exports = async () => {
  try {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });
    return [{ status: 200 }, user];
  } catch (err) {
    return [{ status: 500 }, { message: 'Erro ', error: err.message }];
  }
};