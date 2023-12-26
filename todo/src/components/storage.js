function save(data) {
    let json = JSON.stringify(data);
    localStorage.setItem('todoList', json);
}

function load() {
    const data = localStorage.getItem('todoList');
    if (data) {
        return data;
    } else 
        return null;
}

export { save, load };
