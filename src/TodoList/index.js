import React from "react";

function TodoList(props) {
  return (
    <section>
      <ul className="list-group mb-3 ">{props.children}</ul>
    </section>
  );
}

export default TodoList;
