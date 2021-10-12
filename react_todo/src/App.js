import React, { useState } from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';
import p from "./p.jpg"

function App() {
  const[todos,setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn HTML",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
  ]);
  return(
    <div className = "App">
       <header>
          <h1 className="todoAppTitle">
          Todo List</h1>
        </header>
      <TodoForm onAdd={(text)=>{
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text:text,
            isCompleted:false
          }
        ]);
      }}/>
      <TodoList todos = {todos}
      onDelete={(todo)=>{
setTodos(todos.filter((t)=>t.id!==todo.id));
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if(todo.id===newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }}
      />
      <TodoFooter todos={todos} onClearCompleted={()=>{
        setTodos(todos.filter((todo)=>!todo.isCompleted));
      }}/>
      <img src={p} height={200} width={400}/>
    </div>
  );
}

export default App; 


       