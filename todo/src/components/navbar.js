function navbar(projects) {
    let nav = document.createElement('nav');
    nav.classList.add('nav');

    let projectsDiv = projectButtons(projects);
    let addProjectBtn = addProject();

    nav.appendChild(projectsDiv);
    nav.appendChild(addProjectBtn);
    
    return nav;
}

function projectButtons(projects) {
    let projectsDiv = document.createElement('div');
    projectsDiv.classList.add(['projects']);

    projects.forEach(e => {
        if (e.name !== 'default') {
            let btn = document.createElement('button');
            btn.classList.add(['btn', 'project-btn']);
            btn.textContent = e.name; 
            projectsDiv.append(btn);
        };
    });
    return projectsDiv;
}

function addProject() {
    let btn = document.createElement('button');
    btn.classList.add(['btn', 'add-project']);
    btn.textContent = 'New Project';
    return btn;

}


export { navbar };
