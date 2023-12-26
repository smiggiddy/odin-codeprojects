function createTodo(title, description, dueDate, pomodoros) {
    let _todo = {
        title: title,
        description: description,
        dueDate: dueDate,
        pomodoros: pomodoros,
        completed: false
    }

    return _todo;
}

function editTodo(_todo, title, description, dueDate, pomodoros) {
    if (description) _todo.description = description;
    if (dueDate) _todo.dueDate = dueDate;
    if (pomodoros) _todo.pomodors = pomodoros;
    
}

function deleteTodo() {

}

function createProject(name) {
    let project = {
        name: name,
        todos: []
    }

    return project;
}

class todoHandler {
    // Create default project during construction
    constructor() {
        this.projects = [new createProject('default')];
    }

    getTodos() {
        return this.projects.map(item => item.todos);
    }    
    
    addTodo(project = 'default', title, description, dueDate, pomodoros) {
        let index = this.projects.findIndex(x => x.name === project);
        let _titleExists = this.titleExists(title, this.projects[index].todos);

        if (!_titleExists) {
            this.projects[index].todos.push(new createTodo(title, description, dueDate, pomodoros));
        } else {
            console.log('unable to create duplicate note');
            return
        }

    }

    editTodo(project, title, description, dueDate, pomodors) {
        let projectIndex = this.projects.findIndex(x => x.name === project);
        let todo = this.projects[projectIndex].todos.find(t => t.title === title)

        if (todo){
            if(description) todo.description = description;
            if(dueDate) todo.dueDate = dueDate;
            if(pomodors) todo.pomodoros = pomodors;
        }
    }

    deleteTodo(project, title) {
        let projectIndex = this.projects.findIndex(x => x.name === project);
        let tempArr = this.projects[projectIndex].todos.filter(item => {
            if (item.title !== title){
               return item; 
            };
        });
        this.projects[projectIndex].todos = tempArr;
    }

    titleExists(title, todoArr) {
        return todoArr.find(todo => todo.title === title);
    }

    addProject = name => this.projects.push(createProject(name));

    getProjects () {
        return this.projects.map(item => item.name);
    }

    delProject = name => {
        let index = this.projects.findIndex(proj => proj.name === name);
        let tempArr = this.projects.filter(item => {
            if (item !== this.projects[index] || name === 'default' ){
                return item;
            };
        });
        this.projects = tempArr;
    }

    // return { getTodos, addTodo, editTodo, deleteTodo, addProject, getProjects, delProject }
    
}

export {  todoHandler };



// let todos = todoHandler();
// todos.addTodo('default', 'test', 'some stuff', 'today', 5);
// todos.addProject('chores');
// todos.addTodo('default', 'test default 2', 'some stuff', 'today', 5);
// todos.addTodo('chores', 'choretest', 'some stuff', 'today', 5);
// console.log(todos.getTodos());
// todos.delProject('de');
// todos.editTodo('default', 'test', 'stuffing', 'tomorrow', 4);
// console.log(todos.getTodos());
// todos.deleteTodo('chores', 'choretest');
// console.log(todos.getTodos());
