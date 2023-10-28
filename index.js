document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value.trim(); 

        if (taskText !== "") {
           
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

           
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    });
});