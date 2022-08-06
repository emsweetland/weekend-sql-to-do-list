//using modules
const express = require('express');
const app = express();

//middleware(<what does this mean?)
app.use(express.static('server/public'));
app.use(express.urlencoded( {extended: true}));

//ROUTES
const tasksRouter = require('./route/tasks.router')
app.use('/tasks', tasksRouter)

//globals
const PORT = process.env.PORT || 5000;

//start that serer!
app.listen(PORT, ()=> {
    console.log('listening on port', PORT)
});

