const categoryListAll = require('../controllers/categoryListAll');

module.exports = async (req, res) => {
  const response = await categoryListAll();
  return res.status(response[0].status).json(response[1]);
};