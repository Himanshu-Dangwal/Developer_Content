import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [title, setTitle] = useState("Himanshu")

  function handleClick(){
    let number = Math.random();
    setTitle(number)
  }

  return (
    <>
     <button onClick={handleClick}>Change something</button>
     <Header title={title}></Header>
     <Header title={"Coder"}></Header>
    </>
  )
}

export default App
