// here we are going to learn how to send the data
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

// how to fetch value from the userContext and asnwer to this question is with the help of useContext

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassowrd] = useState('')

    // meaning of the below one line of code is if anything user wants to submit in username and password then that must be accepted and set by the code and setUser is in different file to provide the context of that setUser state we use useContext hook to provide the context
    const {setUser}  = useContext(UserContext) 

    const handleSubmit = (e) => {
        e.preventDefault() // value doesn't go to anywhere after we click on submit button
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder='username' />
        {' '}
        <input 
        type="text" 
        value={password}
        onChange={(e) => setpassowrd(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login