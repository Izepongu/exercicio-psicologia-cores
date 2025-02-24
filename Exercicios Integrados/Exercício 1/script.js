function addTask() {
    var taskText = document.getElementById('taskInput').value;

    if (taskText !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;

        document.getElementById('taskList').appendChild(li);

        document.getElementById('taskInput').value = '';
    } else {
        alert('Por favor, digite uma tarefa.');
    }
}

document.getElementById('addTaskBtn').onclick = addTask;

document.getElementById('taskInput').onkeypress = function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
};
