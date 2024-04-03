function saveTask(){
    console.log("saving task");
    //get values
    const title = $("#inputTitle").val();
    const color = $("#inputColor").val();
    const desc = $("#inputDescription").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();    

    //build an object
    let taskToSave = new Task(title,desc,color,date,status,budget);
    console.log(taskToSave);
    //save to the server

    //display the task
    displayTask(taskToSave);
}
function displayTask(task)
{
    let syntax = `<divclass="task">
    <h5>${task.title}</h5>
    <h5>${task.description}</h5>
    <label class="status">${task.status}</h5>
    <div class="date-budget">
    <label>${task.date}</label>
    <label>${task.budget}</label>
    </div>`
    $(".pending-task").append(syntax);
}
function testRequest(){
    $.ajax({
        type:"GET",//read
        url:"http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(error)
        }
    });
}

function init(){
    //load data
    //retrive data
    //hook events
    $("#btnSave").click(saveTask);
    //document.getElementById("btnSave");
}

window.onload = init;