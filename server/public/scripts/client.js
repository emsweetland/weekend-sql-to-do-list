const { post } = require("../../route/tasks.router");

$(document).ready(onReady){
    //click listeners
    $('#submitBtn').on('click', addTask);

    //load items from server
    displayTask()
};

function addTask(){
    let task = {
        task:task
    }; console.log('in addTask', task);
    //send to server
    $.ajax({
        type: post,
        url: '/tasks' ,
        data: task
    }).then(function(response){
        console.log('back from POST:', response);
        //clear inputs
        $('input').val('');
        //refresh data and DOM
        displayTask()
    }).catch(function(err){
        alert('error adding item:', err);
    })
}

function displayTask(){

    
}