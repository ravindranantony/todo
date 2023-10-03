// Load tasks from local storage
document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
      addTaskToDOM(task);
    });
  });
  
  // Add task function
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if(taskText === '') {
      return;
    }
    
    addTaskToDOM(taskText);
    saveTask(taskText);
    
    taskInput.value = '';
  }
  
  // Add task to the DOM
  function addTaskToDOM(taskText) {
    const taskList = document.getElementById('taskList');
    const tableRow = document.createElement('tr');
  
    const taskCell = document.createElement('td');
    taskCell.textContent = taskText;
  
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      tableRow.remove();
      deleteTask(taskText);
    };
    
    actionCell.appendChild(deleteButton);
    
    tableRow.appendChild(taskCell);
    tableRow.appendChild(actionCell);
    taskList.appendChild(tableRow);
  }
  
  // Save task to local storage
  function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Delete task from local storage
  function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.indexOf(taskText);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
