const findAllController = require('../controllers/findAllUsers');

module.exports = async (req, res) => {
  const response = await findAllController();
  return res.status(response[0].status).json(response[1]);
};