const todoFactory = ((title, description, dueDate, priority) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {
        title,
        description,
        dueDate,
        priority
    }
})

export default todoFactory;