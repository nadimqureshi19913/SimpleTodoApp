const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todolist = document.getElementById("todoList");


addTodoBtn.addEventListener("click", addtodo);

todoInput.addEventListener("keypress", function(e)
{
    if(e.key === "Enter")
    {
        addTodoBtn();
    }
}
);

function addtodo(){
    const todotext = todoInput.value.trim();
    if(todotext !== "")
    {
        const li = document.createElement("li");
        li.textContent = todotext;
        todolist.appendChild(li);
        todoInput.value = "";
    }
}

