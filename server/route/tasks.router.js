//const { thisRouter } = require('express');
const express = require('express');
const tasksRouter = express.Router();

// DB CONNECTION //pool stuff is needed in each router file
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app', //THIS CAN AND WILL CHANGE
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

//get

//post

//put

//delete




module.exports = tasksRouter;