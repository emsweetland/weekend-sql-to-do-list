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
tasksRouter.get('/', (req,res)=> {
    console.log('in /tasks GET');
    const query = `SELECT * from "tasks" ORDER BY "id";`;
    pool.query(query).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log( 'error with get:', err);
        res.sendStatus(500);
    })
})//end get

//post
tasksRouter.post('/', (req, res) => {
    console.log('in /tasks post:', req.body);
    const query = `INSERT INTO "tasks" ("task") VALUES ($1);`;
    const values = [req.body.task];
    pool.query(query, values).then(results => {
        res.sendStatus(201);
    }).catch((err)=> {
        console.log('ERROR WITH INSERT:', err);
        res.sendStatus(500);
    })
}) //end post

//put

//delete




module.exports = tasksRouter;