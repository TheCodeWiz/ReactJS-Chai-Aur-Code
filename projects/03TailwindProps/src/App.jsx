import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    Name: "Manav Bhatt",
    Age: 20,
    Designation: "Creater",
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      {/*<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/27872065/pexels-photo-27872065/free-photo-of-a-boat-is-docked-at-a-dock-near-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>
            Sarah Dayan
          </div>
          <div>
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>  */}
      
    <Card Username='Mr. abc' SomeObj = {myObj} SomeAnotherObject = {newArr} btnText = "click me" /> {/*in this way i can pass value from one component to another using props and with the help of props i can receive the value */}
    <Card Username='Ms. xyz' btnText = "let's visit" /> 
    <Card Username='Ms. pqr' /> 
        
    </>
  )
}

export default App
