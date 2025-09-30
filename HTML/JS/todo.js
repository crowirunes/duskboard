const tdlist = document.getElementById('tdlist'); //unorderd list for TO Do
const addtodo = document.getElementById('addtodo'); //button that opens dbox to add to list
const createTask = document.getElementById('createTask'); //dbox -> form for new task
const taskBox = document.getElementById('taskBox'); //overlay to hide the dbox until called
const createToDo = document.getElementById('createToDo'); // the form
const select = document.getElementById('imp')
//Show taskbox when clicked
addtodo.addEventListener('click', () => {
    createTask.classList.add("show");
    taskBox.classList.add("show");
});
// Hide taskbox when not in use
const cancelBtn = document.querySelector('.createTask button[type="button"]'); //cancelling ToDo
cancelBtn.addEventListener('click', () => {
    createTask.classList.remove("show");
    taskBox.classList.remove("show");
});

// Hide form when clicking on overlay
taskBox.addEventListener('click', () => {
    createTask.classList.remove("show");
    taskBox.classList.remove("show");
});

//Form submission
createToDo.addEventListener('submit', (e) => {
    e.preventDefault(); //Stops the browser's default behavior for an event
    
    const taskName = document.getElementById('ipTask').value;
    const priority = document.getElementById('imp').value;
    const dueDate = document.getElementById('endDate').value;
    
    if (taskName.trim() !== '') {
        addTask(taskName, priority, dueDate);
        
        createToDo.reset();
        createTask.classList.remove("show");
        taskBox.classList.remove("show");
    }

    select.addEventListener("change", function() {
        const option = select.options[select.selectedIndex];
        select.style.backgroundColor = option.style.backgroundColor;
    });
});

//dated task
function hasDate(dueDate){
    if(dueDate != null){
        true;
    }
}
//priority list
function priorityOrder(priority, dueDate){
    if (priority.getElementById('four') && hasDate) {
        return 7;
    }else if (priority.getElementById('four')) {
        return 6;
    }else if (priority.getElementById('three') && hasDate) {
        return 5;
    }else if (priority.getElementById('three')) {
        return 4;
    }else if (priority.getElementById('two') && hasDate) {
        return 3;
    }else if (priority.getElementById('two')) {
        return 2;
    }else if (priority.getElementById('one') && hasDate) {
        return 1;
    }else if (priority.getElementById('one')) {
        return 0;
    }
}
//Add to the list
function addTask(taskName, dueDate) {
    const tList = document.createElement('li');
    tList.innerHTML = `
        <button class="delBtn"> X </button>
        <span>${taskName}</span>
        <hr/>
        <sub>Due:   ${dueDate}</sub>
    `;
    
    //delete task
    const deleteBtn = tList.querySelector('.delBtn'); //delete button
    deleteBtn.addEventListener('click', () => {
        tList.remove();
    });
    
    tdlist.appendChild(tList);
}