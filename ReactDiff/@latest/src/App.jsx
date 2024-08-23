import { useState,useEffect } from 'react'
import './App.css'
import Todo from './components/Todo';

function App() {
  
  const [todos,setTodos] = useState([])

  useEffect(() => {
    
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/todo/");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const todosList = await response.json();
        console.log(todosList)
        setTodos(todosList); 
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos(); 
  }, []);

  

  return (
    <div>
      <input placeholder="Title"></input> <br />
      <input placeholder='Description'></input><br />
      <button onClick={handleClick}>Add me</button>

      <br /><br />
      <h1>My To-Do List</h1>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App;