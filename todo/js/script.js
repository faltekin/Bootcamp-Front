document.addEventListener("DOMContentLoaded", initialize);

let btnAddTask = document.querySelector("#liveToastBtn");
btnAddTask.addEventListener("click", handleFormSubmit);
let taskList = document.querySelector("#list");
let toastSuccess = document.querySelector("#successToast");
let toastError = document.querySelector("#errorToast");

function initialize() {
    loadStoredTasks();
}

function handleFormSubmit(event) {
    event.preventDefault();
    const inputTask = document.querySelector("#task");
    if(inputTask.value.trim() !== ""){
        createTaskItem(inputTask.value);
        inputTask.value = "";
        displayToast(toastSuccess);
    } else {
        displayToast(toastError);
    }
}

function displayToast(toastElement) {
    toastElement.classList.remove("hide");
    toastElement.classList.add("show");
    setTimeout(function() {
        toastElement.classList.remove("show");
        toastElement.classList.add("hide");
    }, 3000);
}

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
        deleteTaskItem(event);
    } else if (event.target.tagName === "li") {
        event.target.classList.toggle("checked");
    }
});

function createTaskItem(task) {
    let listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.innerHTML += '<span class="close">×</span>';
    taskList.append(listItem);
}

function deleteTaskItem(event) {
    event.target.parentElement.remove();
}

