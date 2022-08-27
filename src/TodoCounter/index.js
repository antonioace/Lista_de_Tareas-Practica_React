import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
/* const estilos={

  color:"#DA33FF"
};

<h2 style={estilos}> Has completado 2 de 3 todos</h2> *
Manera de dar estilos/


/* Para añadir estilos la etiqueta style se vuelve un objeto */
function TodoCounter() {
  const {totalTodos,
    completedTodos,}=useContext(TodoContext)
  return (
    <div className="container">
      <h2 className="TodoCounter text-center fs-1 mb-3">
       Has completado {completedTodos } de {totalTodos} todos
      </h2>
    </div>
  );
}

export default TodoCounter;
