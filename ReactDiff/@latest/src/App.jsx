import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Function to fetch todos
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/todo/");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const todosList = await response.json();
        console.log(todosList);
        setTodos(todosList);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos(); // Fetch todos when the component mounts
  }, []); // Empty dependency array to run only on mount

  // Function to handle the click event for adding a new todo
  async function handleClick() {
    try {
      const response = await fetch("http://localhost:8080/api/todo/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title, // Directly use the title variable
          description // Directly use the description variable
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Todo added successfully:', data);

      // Fetch the updated list of todos after adding a new one
      const updatedResponse = await fetch("http://localhost:8080/api/todo/");
      const updatedTodosList = await updatedResponse.json();
      setTodos(updatedTodosList);

      // Clear the input fields
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  }

  // Function to handle title change
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  // Function to handle description change
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      /><br />
      <input
        placeholder='Description'
        value={description}
        onChange={handleDescriptionChange}
      /><br />
      <button onClick={handleClick}>Add me</button>

      <br /><br />
      <h1>My To-Do List</h1>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
