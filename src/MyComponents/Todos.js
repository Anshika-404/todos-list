import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container " style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} onDelete={props.onDelete} /> 
        ))
      )}
    </div>
  );
}

export default Todos;
