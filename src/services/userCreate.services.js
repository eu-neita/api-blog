const userCreate = require('../controllers/userCreate');

module.exports = async (req, res) => {
  const response = await userCreate({ ...req.body });
  return res.status(response[0].status).json(response[1]);
};