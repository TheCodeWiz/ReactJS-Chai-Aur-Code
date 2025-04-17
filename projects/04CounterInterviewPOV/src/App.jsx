import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    // setCounter(counter + 1)
    setCounter( (prevCounter) => prevCounter + 1)
    setCounter( (prevCounter) => prevCounter + 1)
    setCounter( (prevCounter) => prevCounter + 1)
    setCounter( (prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
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
