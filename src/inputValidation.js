const validateInputs = (title, description, dueDate, priority, selectedProjectName) => {
    if (!title.trim()) {
        alert('Title cannot be blank!')
        return false;
    }
    if (!description.trim()) {
        alert('Description cannot be blank!')
        return false;
    }
    if (!dueDate) {
        alert('Please select a due date!')
        return false;
    }
    if (!priority) {
        alert('Please select a priority!')
        return false;
    }
    if (!selectedProjectName.trim()) {
        alert('Please select a project!')
        return false;
    }

    return true;


}

export default validateInputs;