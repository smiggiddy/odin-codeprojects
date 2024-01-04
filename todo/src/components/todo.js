import { format, compareAsc } from "date-fns";

function createTodo(title, description, dueDate, pomodoros) {
    dueDate = dueDate.replaceAll('-', '/');
    
    const newTodo = {
        title: title,
        description: description,
        dueDate: format(new Date(dueDate), 'MM/dd/yyyy'),
        pomodoros: pomodoros,
        completed: false
    }

    return newTodo;
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
    constructor(projects=null) {
        if (projects) {
            this.projects = projects;
        } else if (!this.projects) {
            this.projects = [new createProject('default')];
        }
    }

    getEverything() { return this.projects }


    getTodos() {
        return this.projects.map(item => item.todos);
    }    

    getTodosFromProject(project) {
        return this.projects.find((item) => item.name === project).todos;
    }
    
    addTodo(project = 'default', title, description, dueDate, pomodoros) {
        let index = this.projects.findIndex(x => x.name === project);
        let _titleExists = this.titleExists(title, this.projects[index].todos);

        if (!_titleExists) {
            this.projects[index].todos.push(new createTodo(title, description, dueDate, pomodoros));
            this.projects[index].todos.sort((a,b) => { 
            
                return compareAsc(new Date(a.dueDate), new Date(b.dueDate));
            });
            console.log(this.projects[index]);
                //(itemA, itemB) => {return itemA.dueDate - itemB.dueDate})
        } else {
            alert('unable to create duplicate note');
            return
        }

    }

    editTodo(project, title) {
        // TODO: implement todo method currently just a toggle for completed;
        let projectIndex = this.projects.findIndex(x => x.name === project);
        let todo = this.projects[projectIndex].todos.find(t => t.title === title)

        if (todo){
            todo.completed = !todo.completed;
            // if(description) todo.description = description;
            // if(dueDate) todo.dueDate = dueDate;
            // if(pomodors) todo.pomodoros = pomodors;
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

    addProject(name) {
        let exists = this.projects.find(x => x.name === name);
        if (!exists) {
            this.projects.push(createProject(name));
            return
        }
        alert(`Project ${name} already exists!`);

    } 

    getProjects () {
        return this.projects;
    }

    delProject(name) {
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
