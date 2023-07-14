const express = require('express');
const { loginServices, userCreateServices } = require('./services');
const loginMiddleware = require('./middlewares/login.midleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginMiddleware, loginServices);
app.post('/user', userCreateServices);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
