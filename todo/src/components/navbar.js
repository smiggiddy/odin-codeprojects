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
            
            btn.addEventListener('click', activeProjectBtn);

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

function activeProjectBtn() {
    const projectContainer = document.querySelector('.projects');
    const btns = projectContainer.querySelectorAll('.project-btn');


    for (let i=0; i < btns.length; i++) {

        let current = document.getElementsByClassName('active');

        if (current.length > 0) {
            current[0].className = current[0].className.replace(' active', '');
        }

        this.className += ' active';
    };
}


export { navbar };
