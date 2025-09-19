import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter+1)
    }
    else{
      console.log("Maximum value reached");
    }
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }else{
      console.log("Minimum value reached");
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue} disabled={counter >= 20}
      >Add Value </button>
      <br />
      <button
      onClick={removeValue}disabled={counter <=0}
      >Remove Value </button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
