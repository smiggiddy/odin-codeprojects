import { todoHandler } from "./components/todo";
import { save, load } from "./components/storage";

let todos; let data = load();

// if there's local data save it in the array 
if (data) {
    let jsonData = JSON.parse(data);
    todos = new todoHandler(jsonData);
} else {
    todos = new todoHandler();
}

// todoHandler().addTodo('default', 'test', 'some stuff', 'today', 5);
todos.addProject('job');
todos.addTodo('default', 'test default 2', 'some stuff', 'today', 5);
todos.addTodo('default', 'default 2', 'some stuff', 'today', 5);
// todos.addTodo('chores', 'choretest', 'some stuff', 'today', 5);
// todos.delProject('de');
// todos.editTodo('default', 'test', 'stuffing', 'tomorrow', 4);
// console.log(todos.getTodos());
// todos.deleteTodo('chores', 'choretest');
// console.log(todos.getTodos());
//
//
save(todos.getEverything());
