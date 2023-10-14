import React from "react";
import './style.css'

export default function App(){
  const [todos, setTodos] = React.useState([])
  const [newItem, setNewItem] = React.useState('')

  function handleSubmit(e){
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...todos,
        {id: crypto.randomUUID(), title : newItem, completed :false}
      ]
    })
  
setNewItem('')
    
}

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return{...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id )
    })
  }
  return(
    <div>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item" >New Item</label>
          <input 
          onChange={e => setNewItem (e.target.value)}
          value={newItem}
          type="text"
          id="item" 
          />
        </div>
        <button className="add-item">Add</button>
    </form>
      <h1>Todo List</h1>
      {todos.length === 0 && 'No Todos'}
      <ul className="list">
        {todos.map(todo => {
          return(
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button className="btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
          )
        })}
       
      </ul>
    </div>
  )
}