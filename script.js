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
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
  }
  
  // Save task to local storage
  function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  