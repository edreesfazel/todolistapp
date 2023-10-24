import todoFactory from "./todoFactory";
import { addTodo } from "./addTodo";
import { createProject, projects, addProject, deleteProject } from "./projects";
import { clearTodos, displayTodosForProject, } from "./uiManager";

const sampleTodo1 = todoFactory('Buy Food', 'get fruits and chicken', '2023-10-25', 'high');
const sampleTodo2 = todoFactory('Play Basketball', 'go to gym and play pickup', '2023-10-22', 'medium');

// addtodo button
const addTodoButton = document.getElementById('submitTodo')
addTodoButton.addEventListener('click', addTodo)

//add logic to update the displayed todos when a new project is selected

const projectDropdown = document.getElementById('projectSelect')

projectDropdown.addEventListener('change', () => {
    const selectedProjectName = projectDropdown.value;
    const selectedProject = projects.find(project => project.name === selectedProjectName)

    clearTodos();
    displayTodosForProject(selectedProject)
})

 /* //add a default display project
const initialSetup = () => {
    const defaultProject = projects[0]
    displayTodosForProject(defaultProject)
}
initialSetup(); */

//add an event listener to the add project button
const addProjectButton = document.getElementById('addProjectButton')
addProjectButton.addEventListener('click', addProject)

//add an event listener to the projectContainer
const projectContainer = document.getElementById('projectContainer')

projectContainer.addEventListener('click', (event) => {

    if(event.target.classList.contains('projectItem')) {
        //retrieve the project name from the data attribute
        const clickedProjectName = event.target.textContent

        //with the project name, you can retrieve the corresponding project object
        const clickedProject = projects.find(project => project.name === clickedProjectName )

        const toDoDisplay = document.getElementById('toDoDisplay')
        
        clearTodos();


        //iterate through each project for its todos
        clickedProject.todos.forEach(todo => {
            const toDoDiv = document.createElement('div')

            const titleDisplay = document.createElement('h2')
            const descriptionDisplay = document.createElement('p')
            const dueDateDisplay = document.createElement('p')
            const priorityDisplay = document.createElement('p')
            const completedCheckbox = document.createElement('input')
            completedCheckbox.type = 'checkbox';
            completedCheckbox.classList.add('completedCheckbox')

            titleDisplay.textContent = todo.title;
            descriptionDisplay.textContent = todo.description;
            dueDateDisplay.textContent = todo.dueDate;
            priorityDisplay.textContent = todo.priority;

            toDoDiv.appendChild(titleDisplay)
            toDoDiv.appendChild(descriptionDisplay)
            toDoDiv.appendChild(dueDateDisplay)
            toDoDiv.appendChild(priorityDisplay)
            toDoDiv.appendChild(completedCheckbox)

            toDoDiv.classList.add('toDoDiv');


            toDoDisplay.appendChild(toDoDiv)


        })
 
    }

    if (event.target.classList.contains('deleteProjectButton')) {
        const clickedProjectName = event.target.previousElementSibling.textContent;
        deleteProject(clickedProjectName)
    }
})

