import React from 'react'
import Todos from './Todos'

function Todo({todos}) {

    
  return (
    <div>
        {todos.map(function(todo){
            return <Todos key={todo._id} todo={todo}></Todos>
        })}
    </div>
  )
}

export default Todo