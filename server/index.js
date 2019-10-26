const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors());
app.options('*', cors());

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Linkar com roteador 
const API = require('./db/routes.js');
app.use('/api/', API);
//Variable for ports
const port = process.env.PORT || 5000;

//Start server
app.listen(port, () => console.log(`Server started on port ${port}`));