import { addProject, deleteProject, projectComponent, todoTableComponent } from "./components/todoComponent";
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

let selectedProject = todos.getTodosFromProject('default');
console.table(todos.getEverything());
// starter test data to remove
// todos.addProject('job');
// todos.addTodo('default', 'test default 3', 'some stuff', 'today', 5);
// todos.addTodo('job', 'default 5', 'some stuff', 'today', 5);

function fontAwesome() {
    let script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/24f16b96cf.js';
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
}

function website() {
    const div = document.createElement('div');
    div.classList.add('container');
    document.body.appendChild(div);
    
    updateDisplay();
}

function updateDisplay() {
    const div = document.querySelector('.container');
    if (div) div.innerHTML = '';
   
    // ensure grabbing latest projects
    let projects = todos.getProjects();

    const _navbar = navbar(projects);
    const _todos = todoTableComponent(selectedProject);
    const _addProject = projectComponent();

    _navbar.appendChild(_addProject);
    div.appendChild(_navbar);
    div.appendChild(_todos);

    document.body.appendChild(div);
    addProject(todos);
    deleteProject(todos);
}

fontAwesome();
website();
save(todos.getEverything());

export { updateDisplay };
