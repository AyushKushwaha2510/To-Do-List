document.addEventListener("DOMContentLoaded", function() {

    // Drop-Down Box of Add Task
    const addTask = document.querySelector(".add-task");
    const dropBox = document.querySelector(".drop-box")
    let visible = false;
    dropBox.hidden = true;
    const bullet = document.createElement("img");
    bullet.src = "Assets/Images/circle-16.svg";
    addTask.addEventListener("click", () => {
        if(!visible && addTask.firstChild){
            addTask.replaceChild(bullet, addTask.firstElementChild);
            dropBox.classList.add("drop-box-down");
            dropBox.hidden = false;
            visible = true;
        }
    });

});
