import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function ModalB({ id }) {
  const { openModal, setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  let modelStyle = {
    display: openModal ? "block" : "none",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  return (
    <div className="container">
      <div
        className="modal show fade"
        style={modelStyle}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agrega tu tarea a la lista
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => {
                  setOpenModal(false);
                }}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-6 col-form-label"
                >
                  <p>Nombre de la tarea</p>
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    value={newTodo}
                    onChange={(e) => {
                      setNewTodo(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => {
                  addTodo(newTodo);
                  setOpenModal(false);
                }}
              >
                Guardar tarea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalB;
