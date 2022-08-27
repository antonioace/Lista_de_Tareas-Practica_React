import React from "react";

const decorationText = {
  "text-decoration": "line-through",
};

function TodoItem(props) {
  const onComplete = props.onComplete;

  const onDelete = props.onDelete;
  return (
    <li className="list-group-item d-flex">
      <button className={"btn btn-light "} onClick={onComplete}>
        <i className="bi bi-check"></i>
      </button>
      <p className={`text-dark ${props.obj.completed && "decoration-none"} `}>
        {props.text}
      </p>
      <button className={"btn btn-light "} onClick={onDelete}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
