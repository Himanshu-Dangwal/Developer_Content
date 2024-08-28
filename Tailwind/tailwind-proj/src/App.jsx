import { useEffect, useState } from 'react';
import './App.css'
import useDebounce from './hooks/useDebounce';

function App() {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(1);

  const debouncedVal = useDebounce(val, 500);

  useEffect(() => {
    if (debouncedVal) {
      console.log(`Called ${count} times`);
      setCount(count + 1);
    }
  }, [debouncedVal])

  return (
    <>
      <input type="text" placeholder="Search" onChange={(e) => setVal(e.target.value)} />
    </>
  )
}

export default App
