const findAllByIdController = require('../controllers/findAllById');

module.exports = async (req, res) => {
  const { id } = req.params;
  const response = await findAllByIdController(id);
  return res.status(response[0].status).json(response[1]);
};