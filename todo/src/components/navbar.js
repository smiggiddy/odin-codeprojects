function navbar(projects) {
    let nav = document.createElement('nav');
    nav.classList.add('nav');

    let heading = document.createElement('h1');
    heading.classList.add(['project-heading']);
    heading.textContent = 'Projects';

    let projectsDiv = projectButtons(projects);
    let addProjectBtn = addProject();

    nav.appendChild(heading);
    nav.appendChild(projectsDiv);
    nav.appendChild(addProjectBtn);
    
    return nav;
}

function projectButtons(projects) {
    let projectsDiv = document.createElement('div');
    projectsDiv.classList.add(['projects']);

    projects.forEach(e => {
            let btn = document.createElement('button');
            btn.classList.add('btn', 'project-btn');
            btn.textContent = e.name; 
            btn.dataset.projectName = e.name;
            // btn.addEventListener('click', e => console.log(e.target.dataset.projectName));
            projectsDiv.append(btn);
    });
    return projectsDiv;
}

function addProject() {
    let btn = document.createElement('button');
    btn.classList.add('btn','add-project-btn');
    btn.textContent = 'New Project';
    return btn;

}


export { navbar };