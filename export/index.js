const express = require('express');
const bodyParser = require('body-parser');
const json2xls = require('json2xls');

const config = require('../config');
const xprt = require('./components/export/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());
app.use(json2xls.middleware);

// ROUTES
app.use('/export', xprt);

app.use(errors);

app.listen(config.export.port, () => {
    console.log('Servicio export escuchando en puerto', config.export.port);
});