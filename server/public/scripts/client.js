$(document).ready(onReady);

function onReady(){
    console.log('browser ready')
    //click listeners
    $('#submitBtn').on('click', addTask);
    //load items from server
    displayTask()
};

function addTask(){
    console.log('clicked!');
    let task = {
        task:task
    }; console.log('in addTask', task);
    //send to server
    $.ajax({
        type: 'POST',
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
    $.ajax({
        type : 'GET',
        url : '/tasks'
    }).then( function (response){
        $('#tasksOut').empty();
        //render to DOM
        for(let task = 0; task<response.length; task++)
            $('#tasksOut').append(`
            <li> 
            ${response[task].task}
            ${response[task].status}
            <button class="deleteBtn" data-id"${response[task].id}">delete</button>
            <button class="completeBtn" data-id="${response[task].id}" data-status="${response[task].status}">
                status: ${response[task].status} </button>
            </li>`)
    }).catch(function(err){
        alert('error getting tasks', err);
    })
}