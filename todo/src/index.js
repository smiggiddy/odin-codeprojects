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
todos.addTodo('default', 'test default 2', 'some stuff', 'today', 5);
todos.addTodo('default', 'default 2', 'some stuff', 'today', 5);

const defaultProject = todos.getTodosFromProject('default');

function website() {
    const div = document.createElement('div');
    div.classList.add('container');

    const _navbar = navbar(projects);
    const _todos = todoTableComponent(defaultProject);

    div.appendChild(_navbar);
    div.appendChild(_todos);

    document.body.appendChild(div);

}

website();

// todos.addTodo('chores', 'choretest', 'some stuff', 'today', 5);
// todos.delProject('de');
// todos.editTodo('default', 'test', 'stuffing', 'tomorrow', 4);
// console.log(todos.getTodos());
// todos.deleteTodo('chores', 'choretest');
// console.log(todos.getTodos());
//
//
save(todos.getEverything());
