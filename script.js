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

    // this is my own code
    // const addList = document.querySelector("#add-list");
    // addList.addEventListener("click", () => {
    //     const input = document.getElementById("input-task").value;
    //     if(input) {
    //         const task = document.createElement("div");
    //         task.innerHTML = `${input}`;
    //         task.style.display = "flex";
    //         task.style.position = "relative";
    //         task.style.top = " 60px";
    //         task.style.backgroundColor = "white";
    //         task.style.height = "50px";
    //         task.style.margin = "10px 0px";
    //         task.style.width = "100%";
    //         task.style.borderRadius = "5px";
    //         task.style.boxShadow = "0px 3px 3px 0px rgba(164, 164, 164, 0.16)";
               

    //         dropBox.appendChild(task);
    //     }
    // });


        const taskDoneImg = document.createElement("img");
    taskDoneImg.src = "Assets/Images/clipboard2.svg";
    taskDoneImg.style.width = "30px";
    taskDoneImg.style.height = "30px";

    const taskNotDoneImg = document.createElement("img");
    taskNotDoneImg.src = "Assets/Images/bullet.svg";
    // taskNotDoneImg.width = "20px";

    const addList = document.querySelector("#add-list");
    const inputField = document.querySelector("#input-task");

    addList.addEventListener("click", () => {
        const input = inputField.value.trim();
        if (input) {
            const task = addTask.cloneNode(true);
            task.style.display = "flex";
            task.style.position = "relative";
            task.style.top = "120px";
            task.style.right = "1px";
            task.style.backgroundColor = "white";
            task.style.height = "50px";
            task.style.margin = "10px 0px";
            task.querySelector(":nth-child(2)").style.paddingLeft = "10px";
            task.style.width = "100%";
            task.style.borderRadius = "5px";
            task.style.boxShadow = "0px 3px 3px 0px rgba(164, 164, 164, 0.16)";
            dropBox.appendChild(task);

            task.querySelector(":nth-child(2)").readOnly = true;

            let isTaskDone = false;

            // Get the first image (bullet) and assign it
            let bullet = task.querySelector(":nth-child(1)");

            // Define the toggle function
            function toggleDone() {
                const newImage = (isTaskDone ? taskNotDoneImg : taskDoneImg).cloneNode(true);
                bullet.replaceWith(newImage);
                bullet = newImage; // update bullet reference
                bullet.addEventListener("click", toggleDone);
                
                isTaskDone = !isTaskDone;
                if(isTaskDone){
                    task.querySelector(":nth-child(2)").style.backgroundColor = "#76ff742e"; // Change background color when done
                }
                else{
                    task.querySelector(":nth-child(2)").style.backgroundColor = ""; // Reset background color when not done
                }
            }

            bullet.addEventListener("click", toggleDone);

            inputField.value = "";
            inputField.focus();
        }
    });
});
