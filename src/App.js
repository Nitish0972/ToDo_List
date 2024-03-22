import React, { useState } from 'react';
import "./App.css";
import Form from './COMPONENTS/Form';
import List from './COMPONENTS/List'; 
export default function App(){
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(editId){
      const editTodo=todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t)=>t.id === editTodo.id?
      (
        t={id:t.id,todo}
      ):{
        id:t.id,todo:t.todo
      })

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }



    if(todo !== ''){
      setTodos([{id: `${todo}-${Date.now()}`,todo},...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id) =>{
    const deleteTodo = todos.filter((to) =>to.id !== id);
    setTodos([...deleteTodo]);
  }

  const handleEdit = (id) =>{
    const editTodo = todos.find((i) =>i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }
  return(
    <div className="App">
      <div className="container">
        <h1>To-Do List</h1>
        <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId}/>
        <List todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}