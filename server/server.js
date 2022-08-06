const express = require('express');
const app =express();
const PORT = 5432
app.listen(PORT, function(){
    console.log('listening on port', PORT)
})