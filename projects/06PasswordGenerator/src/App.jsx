import { useState, useCallback, useEffect, useRef } from 'react' 
import './App.css'

function App() {
  const [length, setLength] = useState(8) // minimum length of password is 8 on loading the page for the first time AND also track the length of the password 
  const [numberAllowed, setNumberAllowed] = useState(false) // number must be used only after clicking the checkbox stating number on loading for the first time i.e. if check box for number is clicked then include number else dont use and by default the checkbox is unchecked 
  const [characterAllowed, setCharacterAllowed] = useState(false) // SpecialCharacter must be used only after clicking the checkbox stating character on loading for the first time i.e. if check box for character is clicked then include Special Character else dont use and by default the checkbox is unchecked 
  const [password, setPassword] = useState("") // why double quotes because on loading the page for the first time ,some functionalities or dependencies must be ran automatically and some password must get generated automatically for the first time.

  // useRef hook
  const passwordRef = useRef(null)

  // syntax of useCallback hook is -----> useCallback(function, dependencies in array format)

  // function for generating password everytime randomly
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // here all the alphabets will come with which my password will be created 
    
    if(numberAllowed){
      str += "0123456789"
    }
    
    if(characterAllowed){
      str += "!@#$%^&*~-_+="
    }

    // no of times loop will execute will depend upon or govern by length value
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) //this will fill the pass field that was kept empty above in the start of the function
    }
    
    setPassword(pass)

  // }, [length, numberAllowed, characterAllowed, password]) // by doing this our program will get into infinite loop since we are not passing any method on which our method depends.
  }, [length, numberAllowed, characterAllowed, setPassword])

  // method /function to copy the password after clicking on copy button
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,2) // this line of code will select only 2 letter from the start irrespective of the length or range 
    window.navigator.clipboard.writeText(password)

    // your work will get done by below one line of code also but for optimized code use the code provided above
    // window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator(length)
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-72 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type = "text"
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} // now i have reference to the passwordRef
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-orange-500 text-black px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 ml-4'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type = "checkbox" 
            defaultChecked = {numberAllowed}
            id = "numberInput"
            className='ml-5'
            onChange = {() => {setNumberAllowed((prev) => !prev)}} // reverse the previous value i.e. flipping the true and false 
            />
            <label htmlFor='numberInput'>Add Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="SpecialCharacterInput"
            className='ml-5'
            defaultChecked = {characterAllowed}
            onChange={() => {setCharacterAllowed((prev) => !prev)}} // reverse the previous value i.e. flipping the true and false
            />
            <label htmlFor="SpecialCharacterInput">Add Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
