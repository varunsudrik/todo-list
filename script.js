window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_ele = document.querySelector(".task")

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let task = input.value;
        if(!task){
            alert("enter task")
            return
        }



    })
})

