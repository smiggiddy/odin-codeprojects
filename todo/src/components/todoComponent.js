function todoTableComponent(todos) {
    const div = document.createElement('div');
    div.classList.add('todos');

    if (todos.length > 0) {
        const table = document.createElement('table');
        table.classList.add(['table']);

        todos.forEach(element => {
            const tr = document.createElement('tr');
            const tdTitle = document.createElement('td');
            const tdDesc = document.createElement('td');
            const tdDueDate = document.createElement('td');
            const tdPomodoro = document.createElement('td');
            const tdCompleted = document.createElement('td');

            tdTitle.textContent = element.title;
            tdDesc.textContent = element.description;
            tdDueDate.textContent = element.dueDate;
            tdPomodoro.textContent = element.pomodoros;
            tdCompleted.textContent = element.completed;

            tr.appendChild(tdTitle);
            tr.appendChild(tdDesc);
            tr.appendChild(tdDueDate);
            tr.appendChild(tdPomodoro);
            tr.appendChild(tdCompleted);

            table.appendChild(tr);
        });
        
        div.appendChild(table);
    } else {
        div.textContent = 'All tasks completed';
    }
    return div;
}

function addTodo() {

}

export { todoTableComponent }
