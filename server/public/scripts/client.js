$(document).ready(onReady);

function onReady(){
    console.log('browser ready')
    //click listeners
    $('#submitBtn').on('click', addTask);
    //dynamic click listeners
    $('#outputDiv').on('click', '.deleteBtn', deleteTask);
    $('#outputDiv').on('click', '.completeBtn', completeTask);
    //load items from server
    displayTask()
};

function addTask(){
    let task = {
        task:$('#taskIn').val()
    };
    
    console.log('clicked!');
    console.log('in addTask', task);
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
            <button class="deleteBtn" data-id="${response[task].id}">delete</button>
            <button class="completeBtn" data-id="${response[task].id}" data-status="${response[task].status}">
                complete! </button>
            </li>`)
    }).catch(function(err){
        alert('error getting tasks', err);
    })
}

function deleteTask(){
    const id = $(this).data('id');
    console.log($(this).data('id'))
    console.log('in delete', id);
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${id}`
    }).then( function (response){
        console.log('back from delete', response);
        displayTask();
    }).catch(function(err){
        alert('error with delete:', err);
    })
}

function completeTask(){
    const id = $(this).data('id');
    const status=$(this).data('status');
    console.log('in complete task', id, status);
    $.ajax({
        type: 'PUT',
        url:`/tasks/${id}`,
        data: { status : true }
    }).then(function(response){
    console.log('back from put:', response);
    displayTask();
}).catch(function(err){
    alert('error updating', err)
})
}