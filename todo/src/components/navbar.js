import { getActiveProject } from "..";

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
    const projectsDiv = document.createElement('div');
    const activeProject = getActiveProject();
    projectsDiv.classList.add(['projects']);

    projects.forEach(e => {
            let btn = document.createElement('button');
            let iTag = document.createElement('i');
            // let btnText = document.createTextNode(`${e.name}`);
            let btnSpan = document.createElement('span');

            btnSpan.textContent = ` ${e.name}`;
            
            
            if (e.name === 'default') {
                iTag.classList.add('fas', 'fa-home', 'itag');
            } else {
                let closeSpan = document.createElement('span');
                let closeITag = document.createElement('i')
                iTag.classList.add('fas', 'fa-tasks', 'itag');
                closeITag.classList.add('fa', 'fa-trash');
                closeSpan.classList.add('project-delete-btn');
                closeSpan.appendChild(closeITag);
                btn.appendChild(closeSpan);
            }

            // delete button

            btn.classList.add('btn', 'project-btn');
            if (e.name === activeProject) {
                btn.classList += ' active';
                };

            btn.appendChild(iTag);
            btn.appendChild(btnSpan);
            btn.dataset.projectName = e.name;
            projectsDiv.append(btn);
    });
    return projectsDiv;
}

function addProject() {
    const btn = document.createElement('button');
    const iTag = document.createElement('i');
    const span = document.createElement('span');
    iTag.classList.add('fas', 'fa-plus', 'itag');
    btn.classList.add('btn','add-project-btn');
    span.textContent = 'New Project';
    btn.appendChild(iTag);
    btn.appendChild(span);
    return btn;

}

export { navbar };
