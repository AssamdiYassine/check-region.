require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const specs = require('./v1/configs/swagger');

require('./v1/configs/mongoDB');

// Init expess
const app = express();

// Middlewares
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Start V1

// Routes Folder
const global = require('./v1/routes/global');

// API V1
app.get('/v1/health', (req, res) => res.status(200).json({status: process.env.HEALTH}));
app.use("/v1/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/v1/api/credential', global);
app.use('/v1/api/countries', global);

// End V1

app.get('*', function(req, res){
  res.status(404).send({ error: 'Not found' });
});

// Start Server
const PORT = process.env.PORT;
const IP = process.env.IP
app.listen(PORT);
console.log(`server running on http://${IP}:${PORT}`);
