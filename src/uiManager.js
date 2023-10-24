import { projects } from "./projects"

//clear the displayed todos and display the todos for a specified project


//this clears the todos from the DOM
const clearTodos = () => {
    const toDoDisplay = document.getElementById('toDoDisplay')
    while(toDoDisplay.firstChild) {
        toDoDisplay.removeChild(toDoDisplay.firstChild)
    }
}

const displayTodosForProject = (project) => {
    const toDoDisplay = document.getElementById('toDoDisplay')


    project.todos.forEach(todo => {
        const todoDiv = document.createElement('div') // a div to hold each todo
        todoDiv.classList.add('toDoDiv');

        const titleDisplay = document.createElement('h2')
        const descriptionDisplay = document.createElement('p')
        const dueDateDisplay = document.createElement('p')
        const priorityDisplay = document.createElement('p')
        const completedCheckbox = document.createElement('input')
        completedCheckbox.type = 'checkbox'
        completedCheckbox.classList.add('completedCheckbox');

        titleDisplay.textContent = todo.title
        descriptionDisplay.textContent = todo.description
        dueDateDisplay.textContent = todo.dueDate
        priorityDisplay.textContent = todo.priority

        todoDiv.appendChild(titleDisplay)
        todoDiv.appendChild(descriptionDisplay)
        todoDiv.appendChild(dueDateDisplay)
        todoDiv.appendChild(priorityDisplay)
        todoDiv.appendChild(completedCheckbox)

        toDoDisplay.appendChild(todoDiv)
    })
}

//this function displays all the created projects in the project Container
const updateProjectDisplay = () => {

    const projectContainer = document.getElementById('projectContainer')
    
    //we need to clear out any existing child elements so the projectContainer
    //starts fresh each time i call updateProjectDisplay
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }
    
    projects.forEach(project => {

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('deleteProjectButton')


        const projectDisplayDiv = document.createElement('div')
        const projectDisplayText = document.createElement('h2')

        projectDisplayText.textContent = project.name

        //add the class 'projectItem' to each project div
        projectDisplayText.classList.add('projectItem')

        //add a class to the projectDisplayDiv for styling
        projectDisplayDiv.classList.add('projectDisplayDiv')
        
        projectDisplayDiv.appendChild(projectDisplayText)
        projectDisplayDiv.appendChild(deleteButton)
        projectContainer.appendChild(projectDisplayDiv)

    })
    

}

//set up an event listener to toggle a checked to do item for styling
const toDoDisplay = document.getElementById('toDoDisplay')

//add an event listener to toDoDisplay on a change (a checkbox toggle)
// will the be the only change possible, since we are dealing with
//mostly text and a checkbox
toDoDisplay.addEventListener('change', (event) => {
   
    if(event.target.classList.contains('completedCheckbox')) {
        const toDoDiv = event.target.closest('.toDoDiv')
        if (event.target.checked) {
            toDoDiv.classList.add('todoCompleted')
        } else {
            toDoDiv.classList.remove('todoCompleted')
        }
    }
})


export { clearTodos, displayTodosForProject, updateProjectDisplay}
