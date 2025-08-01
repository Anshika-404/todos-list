import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo" , todo);
    //Deleting this way in react does not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);

    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length == 0) {
      sno = 0;
    } else {
        sno = todos.length > 0 ? todos[todos.length-1].sno + 1 : 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    const newTodos = [...todos, myTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(myTodo);
  }

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;