import { getActiveProject, setActiveProject, updateDisplay, getTodoHandler } from "..";
import { save } from "./storage";

function todoTableComponent(todos) {
    const div = document.createElement('div');
    div.classList.add('todos');

    const heading = document.createElement('h1');
    heading.classList.add('todo-heading');
    heading.textContent = getActiveProject();

    const addTodoButton = document.createElement('button');
    const iTag = document.createElement('i');
    const span = document.createElement('span');

    iTag.classList.add('fas', 'fa-plus', 'itag');
    span.textContent = 'Add Todo';
    addTodoButton.append(iTag, span);
    addTodoButton.classList.add('add-todo-btn');

    div.appendChild(heading);

    if (todos.length > 0) {

        const table = document.createElement('table');
        table.classList.add(['table']);

        todos.forEach(element => {
            const tr = createTableRow(element);
            table.appendChild(tr);
        });
        
        div.appendChild(table);

    } else {

        const p = document.createElement('p')
        p.textContent = 'All tasks completed';

        div.appendChild(p);
    }

    div.appendChild(addTodoButton);

    return div;
}

function createTableCell(content) {
    let cell = document.createElement('td');

    if (typeof content !== 'object') {
        cell.textContent = content;
    } else {
        cell.appendChild(content);
    }

    return cell;
}

function createTableCheckBox(content) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');
    checkbox.checked = content;

    return checkbox;
}

function createTableTodoDeleteBtn() {
    const button = document.createElement('button');
    button.classList.add('todo-delete-btn');

    let closeITag = document.createElement('i')
    closeITag.classList.add('fa', 'fa-trash');

    button.appendChild(closeITag)

    return button;

}

function createTableRow(_todo) {
    const tr = document.createElement('tr');
    tr.classList.add('todo-row');
    
    tr.dataset.todoId = _todo.title;
    
    let checkbox = createTableCheckBox(_todo.completed);
    const cells = [
        createTableCell(checkbox),
        createTableCell(_todo.title),
        createTableCell(_todo.description),
        createTableCell(_todo.dueDate.toString()),
        createTableCell(createTableTodoDeleteBtn())
        // createTableCell(_todo.pomodoros)
    ]
    
    cells.forEach(cell => tr.appendChild(cell));

    if (_todo.completed) {
        tr.classList.add('completed');
    } else {
        tr.classList.remove('completed');
    }

    return tr;
}


function addTodo(todoHandler) {
    const activeProject = getActiveProject();
    const button = document.querySelector('.add-todo-btn');
    const div = document.querySelector('.todo-add');
    const submitButton = div.querySelector('.submit-btn')
    const cancelButton = div.querySelector('.cancel-btn');
    const input = document.querySelector('.todo-add-inputs');

    button.addEventListener('click', () => {
        div.classList.add('todo-add-active')
        button.style.display = 'none';
    });
    cancelButton.addEventListener('click', () => { 
        div.classList.remove('todo-add-active')
        button.style.display = 'inline-block';
    });
    submitButton.addEventListener('click', () => { 
        let newTodo = handleTodoInput(input.childNodes);
        let title = newTodo[0];
        let description = newTodo[1];
        let date = new Date(newTodo[2]);
        console.log(date);
        todoHandler.addTodo(activeProject, title, description, date, 0);
        div.classList.remove('todo-add-active');
        updateDisplay();
        save(todoHandler.getEverything());
    });
}

function handleTodoInput(input) {
    return [...input].map(element => element.value);
}

function deleteTodo(todoHandler) {
    const deleteButtons = document.querySelectorAll('.todo-delete-btn');

    deleteButtons.forEach(e => {
        e.addEventListener('click', element => {
            let activeProject = getActiveProject();
            let todoTitle = element.target.parentNode.parentNode.parentNode.dataset.todoId;

            todoHandler.deleteTodo(activeProject, todoTitle);
            save(todoHandler.getEverything());
            updateDisplay();
            });
    });

}

function handleCompletedTodo(todoHandler) {
    const activeProject = getActiveProject();
    const checkbox = document.querySelectorAll('.todo-checkbox');
    checkbox.forEach(c => {
        c.addEventListener('click', e => {
        const title = e.target.parentNode.parentNode.dataset.todoId;
        todoHandler.editTodo(activeProject, title);

        save(todoHandler.getEverything());
        updateDisplay();
        });
    });
}

function projectComponent() {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const submitButton = document.createElement('button');
    const buttonDiv = document.createElement('div');

    div.classList.add('project-add');
    input.classList.add('project-input-name');
    cancelButton.classList.add('cancel-btn');
    submitButton.classList.add('submit-btn');
    buttonDiv.classList.add('popup-buttons');

    input.placeholder = 'Project name...';
    submitButton.textContent = 'Submit';
    cancelButton.textContent = 'Cancel';

    div.appendChild(input);
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(cancelButton);
    div.appendChild(buttonDiv);

    return div;
}

function addProject(todoHandler) {
    const button = document.querySelector('.add-project-btn');
    const div = document.querySelector('.project-add');
    const submitButton = div.querySelector('.submit-btn')
    const cancelButton = div.querySelector('.cancel-btn');
    const input = document.querySelector('.project-input-name');

    button.addEventListener('click', () => {
        div.classList.add('project-add-active')
        button.style.display = 'none';
    });
    cancelButton.addEventListener('click', () => { 
        div.classList.remove('project-add-active')
        button.style.display = 'block';
    });
    submitButton.addEventListener('click', () => { 
        let name = input.value;
        
        // Add project via the global todos component
        todoHandler.addProject(name);
        div.classList.remove('project-add-active');
        setActiveProject(name);
        updateDisplay();
        save(todoHandler.getEverything());
    });
}

function deleteProject(todoHandler) {
    const deleteButtons = document.querySelectorAll('.project-delete-btn');

    deleteButtons.forEach(e => {
        e.addEventListener('click', element => {
            // prevent this click from bubbling into button clicks
            element.stopPropagation();
            let projectName = element.target.parentNode.parentNode.dataset.projectName; 
            todoHandler.delProject(projectName);
            setActiveProject('default');
            save(todoHandler.getEverything());
            // Always load default project after deleting 
            updateDisplay();
            });
    });

}

function getTodoFromActiveProject() {
    const projectBtns = document.querySelectorAll('.project-btn');
    let projectName;

    const setProjectName = name => { 
        projectName = name.target.closest('.project-btn').dataset.projectName; 
        
        if (projectName) {
            setActiveProject(projectName);
            updateDisplay();
        } else {
            return;
        }         
    };

    if (projectBtns) {
        projectBtns.forEach(btn => btn.addEventListener('click', setProjectName));
    }
}

function addTodoComponent() {
    const div = document.createElement('div');
    div.classList.add('todo-add');

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('todo-add-inputs');

    const titleInput = document.createElement('input');
    titleInput.classList.add('todo-input-name');
    titleInput.placeholder = 'Todo title..';
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('todo-input-desc');
    descriptionInput.placeholder = 'Todo description..';

    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('todo-input-duedate');
    dueDateInput.type = 'date';

    const pomodoroInput = document.createElement('input');
    pomodoroInput.classList.add('todo-input-pomodoro');
    pomodoroInput.type = '';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-btn');
    cancelButton.textContent = 'Cancel';

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-btn');
    submitButton.textContent = 'Submit';

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('popup-buttons');

    inputDiv.append(titleInput, descriptionInput, dueDateInput);
    buttonDiv.append(submitButton, cancelButton)
    div.append(
        inputDiv,
        buttonDiv
    );

    return div;
}


export { 
    addTodoComponent,
    getTodoFromActiveProject, 
    projectComponent, 
    todoTableComponent, 
    addProject, 
    deleteProject,
    addTodo,
    deleteTodo,
    handleCompletedTodo
};
