const loginServices = require('./login.services');
const userCreateServices = require('./userCreate.services');
const findAllServices = require('./findAll.services');
const findAllByIdServices = require('./findAllById.services');

module.exports = { loginServices,
   userCreateServices,
  findAllServices,
  findAllByIdServices };