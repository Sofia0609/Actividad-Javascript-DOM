const texto = document.getElementById("task-input")
const boton = document.getElementById("add-task-btn")
const lista = document.getElementById("adbtnd-task-")


function createTaskElement( taskText ){
    const  elemento =  document.createElement("li");
    elemento.textContent= taskText;

    lista.appendChild(elemento);
}