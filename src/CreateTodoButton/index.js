import React from "react";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };
  return (
    <button
      className="btn btn-success rounded-pill col-sm-3 col-md-4 col-xl-5 mb-3 p-0"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export default CreateTodoButton;
