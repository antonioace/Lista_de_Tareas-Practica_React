import React, { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();
const Defaulttodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Otro Comentario", completed: false },
  { text: "Mas comentarios", completed: false },
  { text: "Administrador de tareas", completed: false },
];

function TodoProvider(props) {
  const [titulo, setTitulo] = useState("XDDDDDD");

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("toditos", Defaulttodos);

  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();

      const searchText = searchValue.toLowerCase();
      console.log(todoText.includes(searchText));
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    };
    saveTodos(newTodos);
  };

  const borrarTodos = (text) => {
    const nuevosTodos = todos.filter((todo) => todo.text !== text);
    /*   const todoIndex = todos.findIndex((todo) => todo.text == text);
  
      const newTodos = [...todos];
      newTodos.splice(1, todoIndex); 
      Otra manera de eliminarlo*/

    saveTodos(nuevosTodos);
  };

  const addTodo = (text) => {
    const nuevoTodo = { text, completed: false };
    const newTodos = [...todos, nuevoTodo ] ;
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        openModal,
        setOpenModal,
        titulo,
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        completeTodos,
        borrarTodos,
        searchedTodos,
        addTodo
       
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
