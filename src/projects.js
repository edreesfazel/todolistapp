import { updateProjectDisplay } from "./uiManager";

let projects = [];

//this function creates a project and adds it to our projects array
//then it calls the update project dropdown to update the ui
const createProject = (name) => {
    if (projects.some(project => project.name === name)) {
        alert('A project with this name already exists')
        return
    }
    const newProject = {
        name: name,
        todos: []
    };

    //push the newProject into your projects array
    projects.push(newProject);
    //update the dropdown
    updateProjectDropdown();
    updateProjectDisplay();
}


const updateProjectDropdown = () => {
    const projectSelect = document.getElementById('projectSelect');

    projectSelect.innerHTML = '<option value="" disabled selected>Select a Project</option>';


    projects.forEach(project => {
        const option = document.createElement('option')
        option.value = project.name;
        option.textContent = project.name;
        projectSelect.appendChild(option)
    })
}


//this function grabs a project from the user then updates it using createproject
const addProject = () => {
    const projectNameInput = document.getElementById('projectNameInput')
    const projectName = projectNameInput.value.trim()

    if (projectName) { //ensure the project name isn't empty
        createProject(projectName);
        projectNameInput.value = '' //clears the input field
    } else {
        alert('Please enter a valid project name');
    }



}

export {createProject, updateProjectDropdown, projects, addProject}