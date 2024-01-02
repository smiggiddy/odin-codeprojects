import { addProject, projectComponent, todoTableComponent } from "./components/todoComponent";
import { navbar } from "./components/navbar";
import { todoHandler } from "./components/todo";
import { save, load } from "./components/storage";
import './style.css';

let todos; 
let data = load();

// if there's local data save it in the array 
if (data) {
    let jsonData = JSON.parse(data);
    todos = new todoHandler(jsonData);
} else {
    todos = new todoHandler();
}

let projects = todos.getProjects();
let selectedProject = todos.getTodosFromProject('default');
console.table(todos.getEverything());
// starter test data to remove
// todos.addProject('job');
// todos.addTodo('default', 'test default 3', 'some stuff', 'today', 5);
// todos.addTodo('job', 'default 5', 'some stuff', 'today', 5);


function website() {
    const div = document.createElement('div');
    div.classList.add('container');
    document.body.appendChild(div);
    
    updateDisplay();
}

function updateDisplay() {
    const div = document.querySelector('.container');
    if (div) div.innerHTML = '';

    const _navbar = navbar(projects);
    const _todos = todoTableComponent(selectedProject);
    const _addProject = projectComponent();

    _navbar.appendChild(_addProject);
    div.appendChild(_navbar);
    div.appendChild(_todos);

    document.body.appendChild(div);
    addProject(todos);
}


website();
save(todos.getEverything());

export { updateDisplay };
