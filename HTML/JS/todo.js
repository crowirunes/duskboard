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

//Add to the list
function addTask(taskName, priority, dueDate) {
    const tList = document.createElement('li');
    tList.innerHTML = `
        
        <span>${taskName}</span>
        <span>Priority: ${priority}</span>
        <span>Due: ${dueDate}</span>
        <button class="delBtn"> X </button>
    `;
    
    //delete task
    const deleteBtn = tList.querySelector('.delBtn'); //delete button
    deleteBtn.addEventListener('click', () => {
        tList.remove();
    });
    
    tdlist.appendChild(tList);
}