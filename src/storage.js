
const saveToLocalStorage = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

const loadFromLocalStorage = () => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        return JSON.parse(storedProjects)
    }
    return [];
}


export {saveToLocalStorage, loadFromLocalStorage}