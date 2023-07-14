const { User } = require('../models');

module.exports = async () => {
  try {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });
    console.log(user);
    if (!user) throw Error;
    return [{ status: 200 }, user];
  } catch (err) {
    return [{ status: 500 }, { message: 'Erro ao salvar o usuário no banco', error: err.message }];
  }
};