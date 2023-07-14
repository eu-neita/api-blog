const loginServices = require('./login.services');
const userCreateServices = require('./userCreate.services');
const findAllServices = require('./findAll.services');
const findAllByIdServices = require('./findAllById.services');
const categoryCreateServices = require('./categoryCreate.services');
const categoryListAllServices = require('./categoryListAll.services');

module.exports = { loginServices,
   userCreateServices,
  findAllServices,
  findAllByIdServices,
  categoryCreateServices,
  categoryListAllServices,
};