import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{
    title: "Study",
    description: "Learn about yourself",
    isCompleted: false
  }, {
    title: "Make Friends",
    description: "Have to search new friends",
    isCompleted: false
  }])

  return (
    <div>
      <Button count={count} setCount={setCount} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

// Button is a component that takes props (count and setCount to render itself and changes its appearance according to the state that it receives)
function Button(props) {
  function handleClick() {
    props.setCount(props.count + 1);
  }

  return <button onClick={handleClick}>Count = {props.count}</button>
}

// Todos component renders a list of Todo components
function Todos(props) {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  )
}

// Todo component receives todo as a prop
function Todo({ todo }) {
  return (
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <h3>{todo.isCompleted ? "Completed" : "Not Completed"}</h3>
    </>
  )
}

export default App
