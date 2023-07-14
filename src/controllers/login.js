const parseHash = require('../utils/parseHash');

module.exports = async (req, res) => {
  try {
    const { email } = req.body;

    const token = parseHash(email);
    
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};