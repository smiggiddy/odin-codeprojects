import { todoTableComponent } from "./components/todoComponent";
import { navbar } from "./components/navbar";
import { todoHandler } from "./components/todo";
import { save, load } from "./components/storage";

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

// starter test data to remove
todos.addProject('job');
todos.addTodo('default', 'test default 3', 'some stuff', 'today', 5);
todos.addTodo('job', 'default 5', 'some stuff', 'today', 5);


function website() {
    const currentProject = todos.getTodosFromProject('default');
    const div = document.createElement('div');
    div.classList.add('container');

    const _navbar = navbar(projects);
    const _todos = todoTableComponent(currentProject);

    div.appendChild(_navbar);
    div.appendChild(_todos);

    document.body.appendChild(div);

}

website();
save(todos.getEverything());
