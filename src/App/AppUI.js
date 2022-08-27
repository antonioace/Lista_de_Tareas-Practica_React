import React, { useContext } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import ModalB from "../ModalB";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    borrarTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <div className="container shadow rounded pt-5 mt-5  d-flex flex-column alig-items-center justify-content-center">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate ,hubo un error ...</p>}

        {!loading && !searchedTodos.length && (
          <p className="fs-4 text-success">Crea tu primer todo ....</p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            obj={todo}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => borrarTodos(todo.text)}
          />
        ))}
      </TodoList>
    
     <ModalB id="holaMundo"/>

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      openModal={openModal}
      />
{openModal && (<ModalB id="holaMundo"/>)}

    </div>
  );
}

export default AppUI;
