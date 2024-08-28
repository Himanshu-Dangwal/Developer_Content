import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeaderWithButton from './components/HeaderWithButton'
import useDebounce from './hooks/useDebounce';


function App() {
  const [count, setCount] = useState(0)
  const [val, setVal] = useState("");
  const debouncedVal = useDebounce(val, 500);
  useEffect(() => {
    if (debouncedVal) {
      console.log(`count = ${count}`)
      setCount(count + 1);
    }
  }, [debouncedVal])
  return (
    <>
      {/* <HeaderWithButton></HeaderWithButton>
     <Header title={"Coder"}></Header> */}

      <input placeholder='Search' onChange={(e) => setVal(e.target.value)}></input>
    </>
  )
}

export default App
