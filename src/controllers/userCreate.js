const { User } = require('../models');
const parseHash = require('../utils/parseHash');

module.exports = async (body) => {
  try {
    const user = await User.create(body);
    if (!user) throw Error;
    const token = parseHash(body.email);
    return [{ status: 201 }, { token }];
  } catch (err) {
    return [{ status: 500 }, { message: 'Erro ao salvar o usuário no banco', error: err.message }];
  }
};