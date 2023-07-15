const { Category } = require('../models');

module.exports = async (req, res, next) => {
  if (!req.body.title || !req.body.content || !req.body.categoryIds) {
 return res
  .status(400).json({ message: 'Some required fields are missing' }); 
}
 const { categoryIds: ids } = req.body;
  const allCategories = await Category.findAll();
  const validCategories = ids.map((id) => {
    const cat = allCategories.find((category) => category.id === Number(id));
    return cat;
  });
  if (validCategories.includes(undefined)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};