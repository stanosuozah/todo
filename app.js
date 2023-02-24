const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterTodo = document.querySelector(".filter_todo");

//add eventListener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", filterOption);

//functions
function addTodo(event) {
  //prevent default action
  
  event.preventDefault();

if (todoInput.value !== "") {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value.trim();
    newTodo.classList.add("todo_item");
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete_btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete_btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  } else {
    alert("can not add empty todo");
  }
}

function deleteCheck(event) {
  const item = event.target;
  console.log("hi")
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    todo.remove()
    // // todo.classList.add("fall");
    // // todo.addEventListener("transitionend", function () {
    
    // });
  }

  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterOption(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        console.log("all")
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};