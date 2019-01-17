const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('./knexfile')

const server = express();

const db = knex(knexConfig.development);

//middleware 
server.use(morgan('short')); //3rd party logging yarn add morgan 
server.use(helmet()); //3rd party security yarn add helmet 
server.use(express.json()); //built-in 
server.use(cors()); //3rd party yarn add cors

//routes 

server.get('/', (req, res) => {
    res.send('Number 5 is alive!!!');
}); 

