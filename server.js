const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

const routes = require('./api/routes/routes.js');
const connection = require('./connection.js');
const middlewares = require('./middleware')

connection();

middlewares(app);

routes(app);

app.listen(port);

console.log(`RESTful API server started on: ${port} `);