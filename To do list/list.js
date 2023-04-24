const todoForm = document.getElementById('todo-form');
const todoInp = document.getElementById('todo-input');
const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');

let tasks = [];

function addTask(event) {
  event.preventDefault();
  const task = todoInp.value;
  if (task !== '') {
    tasks.push({ text: task, completed: false });
    todoInp.value = '';
    renderTasks();
  }
}

function renderTasks() {
  pendingTasks.innerHTML = '';
  completedTasks.innerHTML = '';

  if (tasks.filter(task => !task.completed).length === 0) {
    pendingTasks.innerHTML = '<p>No pending tasks.</p>';
   
  }

  if (tasks.filter(task => task.completed).length === 0) {
    completedTasks.innerHTML = '<p>No completed tasks.</p>';
  }

  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('flex-item');
    div.innerHTML = '';
    div.innerHTML += "<h2>" + task.text + "</h2>";
    if (!task.completed) {
      div.innerHTML += "<br><button onclick='completeTask(" + index + ")'>Complete</button>";
      pendingTasks.appendChild(div);
    } else {
      div.innerHTML += "<br><button onclick='removeCompletedTask(" + index + ")'>Delete</button>";
      completedTasks.appendChild(div);
    }
  });
}


function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

function removeCompletedTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

todoForm.addEventListener('submit', addTask);
renderTasks();