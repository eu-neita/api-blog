const { Category } = require('../models');

module.exports = async () => {
  try {
    const user = await Category.findAll();
    return [{ status: 200 }, user];
  } catch (err) {
    return [{ status: 500 }, { message: 'Erro ', error: err.message }];
  }
};