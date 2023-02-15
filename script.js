window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let task = input.value;
        if(!task){
            alert("enter task")
            return
        }

        let task_el = document.createElement("div")
        task_el.classList.add("task")
    
        let task_content_el = document.createElement("div")
        task_content_el.classList.add("content")
        task_content_el.innerText = task
    
        task_el.appendChild(task_content_el)
        console.log(task_el)
        list_el.appendChild(task_el)
    



    })



})

