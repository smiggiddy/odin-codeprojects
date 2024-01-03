import { addProject, deleteProject, projectComponent, todoTableComponent, getTodoFromActiveProject } from "./components/todoComponent";
import { navbar } from "./components/navbar";
import { todoHandler as todoManager } from "./components/todo";
import { save, load } from "./components/storage";
import './style.css';

const data = load();
let todos = data ? new todoManager(JSON.parse(data)) : new todoManager();

let activeProject;

function setActiveProject(value) {
   activeProject = value; 
}

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
    let currentActiveProject = activeProject || 'default';
    let todosToRender = todos.getTodosFromProject(currentActiveProject);

    const _navbar = navbar(projects);
    const _addProject = projectComponent();
    const _todos = todoTableComponent(todosToRender);

    _navbar.appendChild(_addProject);
    div.appendChild(_navbar);
    div.appendChild(_todos);

    document.body.appendChild(div);
    getTodoFromActiveProject();
    addProject(todos);
    deleteProject(todos);
}

fontAwesome();
website();
save(todos.getEverything());

export { setActiveProject, updateDisplay };
