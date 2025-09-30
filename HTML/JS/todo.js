const tdlist = document.getElementById('tdlist'); //unorderd list for TO Do
const addtodo = document.getElementById('addtodo'); //button that opens dbox to add to list
const createTask = document.getElementById('createTask'); //dbox -> form for new task
const taskBox = document.getElementById('taskBox'); //overlay to hide the dbox until called
const createToDo = document.getElementById('createToDo'); // the form
const select = document.getElementById('imp') //priority select
const ogDate = document.getElementById('endDate'); //due date input
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
    return dueDate !== null && dueDate !== "";
}

//format date
function formatDate(dateString) {
    if(!hasDate(dateString)){
        return "";
    }else{
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    }
}
//priority list
function priorityOrder(priority, dueDate){
    if (priority==="four" && hasDate(dueDate)){
        return 7;
    }else if (priority==="four"){
        return 6;
    }else if (priority==="three" && hasDate(dueDate)){
        return 5;
    }else if (priority==="three" ){
        return 4;
    }else if (priority==="two" && hasDate(dueDate)) {
        return 3;
    }else if (priority==="two" ){
        return 2;
    }else if (priority==="one" && hasDate(dueDate)){
        return 1;
    }else if (priority==="one" ){
        return 0;
    }else{
        return -1;
    }
}
//Add to the list
function addTask(taskName, priority, dueDate) {
    const newToDo = document.createElement('li');
    const order = priorityOrder(priority, dueDate);
    newToDo.dataset.order = order; //order set on li
    if(hasDate(dueDate)){
        newToDo.innerHTML = `
            <div class="row></div>
            <button class="delBtn"> X </button>
            <span>${taskName}</span>
            <hr/>
            <sub>Due:   ${formatDate(dueDate)}</sub>
        `;
    }else{
        newToDo.innerHTML = `
            <button class="delBtn"> X </button>
            <span>${taskName}</span>
        `;
    }
    //delete task
    const deleteBtn = newToDo.querySelector('.delBtn'); //delete button
    deleteBtn.addEventListener('click', () => {
        newToDo.remove();
    });
    //insert in order
    let inserted = false;
  for (let child of tdlist.children) {
    if (parseInt(child.dataset.order) < order) {
      tdlist.insertBefore(newToDo, child);
      inserted = true;
      break;
    }
  }
  if (!inserted) {
    tdlist.appendChild(newToDo);
  }
}