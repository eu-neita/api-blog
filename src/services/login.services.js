const loginController = require('../controllers/login');

module.exports = async (req, res) => {
  const { email } = req.body;
  const response = await loginController(email);
  return res.status(response[0].status).json(response[1]);
};
