import React, { useState } from 'react'
import "./App.css"

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

// array mai update karna ho to spread oparator [...spread] ka use kiya jata hai 
const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
setListTodo([...listTodo,inputText])
  }
  const deleteItem =(id)=>{
    const newTodo= [...listTodo]
    newTodo.splice(id,1)
    setListTodo(newTodo)
  }
  return (
  <div className="main-container">
<div className="center-container">

<TodoForm addList={addList} />
<h1 className="app-heading">
  Todo
</h1>
{listTodo.map((todoItem,index)=>(
  <TodoList key={index} list={todoItem} deleteItem={deleteItem} />
))}
<hr />
</div>
  </div>
  )
}

export default App
