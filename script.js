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

    // const task = 
    const addList = document.querySelector("#add-list");
    addList.addEventListener("click", () => {
        const input = document.getElementById("input-task").value;
        if(input) {
            const task = document.createElement("div");
            task.innerHTML = `${input}`;
            task.style.display = "flex";
            task.style.position = "relative";
            task.style.top = " 60px";
            task.style.backgroundColor = "white";
            task.style.height = "50px";
            task.style.margin = "10px 0px";
            task.style.width = "100%";
            task.style.borderRadius = "5px";
            task.style.boxShadow = "0px 3px 3px 0px rgba(164, 164, 164, 0.16)";
               

            dropBox.appendChild(task);
        }
    });

});
