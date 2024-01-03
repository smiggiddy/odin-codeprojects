import { updateDisplay } from "..";
import { save } from "./storage";

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

            tr.classList.add('todo-row');
            tr.dataset.todoId = element.title;
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

function projectComponent() {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const submitButton = document.createElement('button');
    const buttonDiv = document.createElement('div');

    div.classList.add('project-add');
    input.classList.add('project-input-name');
    cancelButton.classList.add('cancel-project-btn');
    submitButton.classList.add('submit-project-btn');
    buttonDiv.classList.add('project-buttons');

    input.placeholder = 'Project name...';
    submitButton.textContent = 'Submit';
    cancelButton.textContent = 'Cancel';

    div.appendChild(input);
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(cancelButton);
    div.appendChild(buttonDiv);

    return div;
}

function addProject(proj) {
    const button = document.querySelector('.add-project-btn');
    const submitButton = document.querySelector('.submit-project-btn')
    const cancelButton = document.querySelector('.cancel-project-btn');
    const div = document.querySelector('.project-add');
    const input = document.querySelector('.project-input-name');

    button.addEventListener('click', () => div.classList.add('project-add-active'));
    cancelButton.addEventListener('click', () => div.classList.remove('project-add-active'));
    submitButton.addEventListener('click', () => { 
        let name = input.value;
        
        // Add project via the global todos component
        proj.addProject(name);
        div.classList.remove('project-add-active');
        updateDisplay();
        save(proj.getEverything());
    });
}

function deleteProject(proj) {
    const deleteButtons = document.querySelectorAll('.project-delete-btn');

    deleteButtons.forEach(e => {
        e.addEventListener('click', element => {
        let projectName = element.target.parentNode.parentNode.dataset.projectName; 
        proj.delProject(projectName);
        save(proj.getEverything());
        updateDisplay();
        });
    });

}


export { projectComponent, todoTableComponent, addProject, deleteProject };
