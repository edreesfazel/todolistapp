import {projects} from './projects'
import { clearTodos, displayTodosForProject } from './uiManager';
import validateInputs from './inputValidation';

const addTodo = () => {
    //get values from the input fields
    // create a new dom element to display the todo
    //add this element to the page

    //get the elements from the DOM
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const selectedProjectName = document.getElementById('projectSelect').value;
    const projectObject = projects.find(project => project.name === selectedProjectName); //look in the projects array for the project object with the name that matches the selected project

    //INPUT VALIDATION//
    if(!validateInputs(title, description, dueDate, priority, selectedProjectName)) {
        return;
    }

    //push the new todo into the todos array of the specified project
    //since the project object is structured like this:
    // {
    // name: 'name',
    //todos: []
    //}
    // we should create a todo object and push that into the project object array

    //create a new todo object
    const newTodo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };

    projectObject.todos.push(newTodo)
    //create note elements 
    const titleDisplay = document.createElement('h1')
    const descriptionDisplay = document.createElement('p')
    const dueDateDisplay = document.createElement('p')
    const priorityDisplay = document.createElement('p')
    const completedCheckbox = document.createElement('input')
    completedCheckbox.type = 'checkbox';
    completedCheckbox.classList.add('completedCheckbox')

    //update the text content of the note elements with elements from the dom
    titleDisplay.textContent = title
    descriptionDisplay.textContent = description
    dueDateDisplay.textContent = dueDate
    priorityDisplay.textContent = priority

    //create a div for each todo
    const toDoDiv = document.createElement('div')

    //append the todo elements to our tododiv, and append that to our tododisplay div
    const toDoDisplay = document.getElementById('toDoDisplay')
    toDoDiv.appendChild(titleDisplay)
    toDoDiv.appendChild(descriptionDisplay)
    toDoDiv.appendChild(dueDateDisplay)
    toDoDiv.appendChild(priorityDisplay)
    toDoDiv.appendChild(completedCheckbox)

    toDoDiv.classList.add('toDoDiv');

    toDoDisplay.appendChild(toDoDiv)



    clearTodos()
    displayTodosForProject(projectObject)

}

export {addTodo}