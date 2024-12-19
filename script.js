
  

document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        ${taskValue}
        <button class="remove-btn" onclick="removeTask(this)">❌</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  