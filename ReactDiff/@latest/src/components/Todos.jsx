import React from 'react'

function Todos({todo}) {
  return (
    <div>
        <h1>Title : {todo.title}</h1>
        <h2>Description : {todo.description}</h2>

        <br /><br />
    </div>
  )
}

export default Todos