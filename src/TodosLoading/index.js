import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return (
      <div className="Loading-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className="Loading-deleteIcon"></span>
      </div> 
    );
}

export { TodosLoading };