const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
// Add event listener
todoButton.addEventListener("click",addToDo);

function addToDo(event){
    event.preventDefault();
    if (todoInput.value !== ""){
        //const todoDiv = document.createElement("div");
        //todoDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value.trim();
        newTodo.classList.add("todo_item");
        //todoDiv.appendChild(newTodo);
        todoList.appendChild(newTodo)

        const completeButton = document.createElement("button")
        completeButton.innerHTML = "<i class='fas fa-check'></i>"
        completeButton.classList.add("complete_btn")
        newTodo.append(completeButton);

        //Complete Button
        completeButton.addEventListener("click", markComplete);
        function markComplete(){
            newTodo.innerHTML = '<strike>' + newTodo.innerHTML + '</strike';
        }
               
        //Delete Icon
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = "<i class='fas fa-trash'></i>"
        deleteButton.classList.add("delete_btn")
        newTodo.append(deleteButton);

        //Delete Button
        deleteButton.addEventListener("click",deleteItem)
        function deleteItem(){
            newTodo.remove();

        }

    }
}


