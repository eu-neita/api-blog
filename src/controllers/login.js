const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email } = req.body;

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: email }, secret, jwtConfig);

    // const validateResponse = await validateEmail(req, res);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};