const { User } = require('../models');

module.exports = async (id) => {
  try {
    const user = await User.findOne({ where: { id },
       attributes: { exclude: ['password'] } });
    if (!user) return [{ status: 404 }, { message: 'User does not exist' }];
    return [{ status: 200 }, user];
  } catch (err) {
    return [{ status: 500 }, { message: 'Erro', error: err.message }];
  }
};