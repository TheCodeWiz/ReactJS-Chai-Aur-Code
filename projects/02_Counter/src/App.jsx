import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // used hook named useState()
  let [counter, setCounter] = useState(15)
  
  // let counter = 5

  // using arrow function to define the function / method
  const addValue = () => {

    // to check whether the function is running properly
    // console.log("Value added", Math.round((Math.random()*10)+1))
    
    // console.log("Value added + random number", Math.round((Math.random()*10)+1))
    // console.log("Value added + counter number", counter)
    
    // setCounter(counter + 1)

    // counter++;
    // setCounter(counter)

    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    // console.log("removed value: ", counter);
  }

  return (
    <>
      <h1>hey, I am Batman !</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick = {addValue}
      >Add Value</button>

      <button
        onClick = {removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
