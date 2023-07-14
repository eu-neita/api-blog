const categoryCreate = require('../controllers/categoryCreate');

module.exports = async (req, res) => {
  const response = await categoryCreate({ ...req.body });
  return res.status(response[0].status).json(response[1]);
};