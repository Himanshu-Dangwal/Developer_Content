import { useState } from 'react';

function HeaderWithButton() {

   const [title, setTitle] = useState("Himanshu")

  function handleClick(){
    let number = Math.random();
    setTitle(number)
  }
  
  return (
    <div> 
        <button onClick={handleClick}>Change something</button>
        Hello my name is {title}
    </div>
  )
}

export default HeaderWithButton