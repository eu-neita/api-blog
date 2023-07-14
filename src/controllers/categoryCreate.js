const { Category } = require('../models');

module.exports = async (body) => {
  try {
    const nameCreated = await Category.create(body);
    if (!body.name) return [{ status: 400 }, { message: '"name" is required' }];
    return [{ status: 201 }, nameCreated];
  } catch (err) {
    return [{ status: 500 },
      { message: 'Erro ao salvar o categoria no banco', error: err.message }];
  }
};