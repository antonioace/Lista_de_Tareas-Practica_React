import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="row">
      <input
        placeholder="Cebolla"
        className="form-control mb-3 col-sm-4"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}

export default TodoSearch;
