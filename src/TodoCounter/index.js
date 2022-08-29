import React from "react";
import { TodoContext } from '../TodoContext';
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  //const { totalTodos, completedTodos } = React.createContext(TodoCounter);
  return (
    <>
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
      <div className="perspective-text">
        <div className="perspective-line">
          <p className="title_text">Wilbert</p>
          <p className="title_text">to</p>
        </div>
        <div className="perspective-line">
          <p className="title_text">to</p>
          <p className="title_text">do</p>
        </div>
        <div className="perspective-line">
          <p className="title_text">do</p>
          <p className="title_text">{completedTodos} left </p>
        </div>
        <div className="perspective-line">
          <p className="title_text">{completedTodos} de </p>
          <p className="title_text">of {totalTodos} </p>
        </div>
        <div className="perspective-line">
          <p className="title_text">de {totalTodos}</p>
          <p className="title_text"></p>
        </div>
      </div>
    </>
  );
}

//export default TodoCounter;

export { TodoCounter };
