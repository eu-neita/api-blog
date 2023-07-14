const parseHash = require('../utils/parseHash');

module.exports = async (email) => {
  try {
    const token = parseHash(email);
    return [{ status: 200 }, { token }];
  } catch (err) {
    return [{ status: 200 }, { message: 'Internal Error', error: err.message }];
  }
};