import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos,setTodos] = useState([{
    title : "Study",
    description : "Learn about yourself",
    isCompleted : false
  },{
    title : "Make Friends",
    description : "Have to search new friends",
    isCompleted : false
  }])

  return (
    <div>
      
        <Button count={count} setCount={setCount}></Button>
        <Todo todos={todos} setTodos={setTodos}></Todo>
    </div>
  )
}

//Button is a component that takes props (count and setCount to render itself and changes its appearance according to the state that it recieves)
function Button(props){

  function handleClick(){
    props.setCount(props.count+1);
  }

  return <button onClick={handleClick}>Count = {props.count}</button>
}

//To DOs

function Todo(props){
  return (<>
    <h1>{props.todos}</h1>
  </>)
}

export default App
