const inTarea = document.getElementById("task-input");
const btAgregar = document.getElementById("add-task-btn");
const ulListaTareas = document.getElementById("task-list");

function createTaskElement (taskText) {
  
  const elemento = document.createElement("li");
  elemento.textContent = taskText;
  elemento.className = "task-item";

  ulListaTareas.appendChild(elemento);

  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  boton.className = "delete-btn";

  elemento.appendChild(boton);

  boton.addEventListener("click", () => { elemento.remove();   saveTasks();  } )
  
}

btAgregar.addEventListener("click", () => {
  if (inTarea.value != "") {
    createTaskElement(inTarea.value);
    inTarea.value = ""; 
  }
    saveTasks();
  }
)

function saveTasks(){
    const task = []
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach(item => {
        task.push(item.firstChild.textContent)
    });

    localStorage.setItem("tasks", JSON.stringify(task))
    console.log("Tareas: ", task);
}

function loadTask(){
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  for(const task of storedTasks){
    createTaskElement(task);
  }
}

loadTask();
