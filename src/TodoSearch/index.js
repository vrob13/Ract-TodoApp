import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { serchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar Cebolla"
      value={serchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
