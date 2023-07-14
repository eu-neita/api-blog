const express = require('express');
const { loginServices,
  userCreateServices,
  findAllServices,
  findAllByIdServices } = require('./services');
const loginMiddleware = require('./middlewares/login.midleware');
const userCreateMiddleware = require('./middlewares/userCreate.middleware');
const tokenValidateMiddleware = require('./middlewares/tokenValidate.middleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginMiddleware, loginServices);
app.post('/user', userCreateMiddleware, userCreateServices);
app.get('/user', tokenValidateMiddleware, findAllServices);
app.get('/user/:id', tokenValidateMiddleware, findAllByIdServices);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
