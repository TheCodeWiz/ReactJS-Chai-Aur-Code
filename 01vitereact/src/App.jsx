import Chai from "./chai"

function App() {

  // return (
  //   // <></> this brackets are nothing but called fragment.
  //   <> 
  //   <Chai/>
  //   <h1>hello, I'm React Developer</h1>
  //   <h2>My name is Manav Bhatt</h2>
  //   </>
  // )
  
  // how variable and javascript gets injected is what we are going to learn now
  // whatever written inside curly braces in the tag is represented as a variable 
  const username = 'Batman !'
  return (
    // <></> this brackets are nothing but called fragment.
    <> 
    <Chai/>
    <h1>hello, I'm React Developer & {username}</h1>  
    <h2>My name is Manav Bhatt</h2>
    </>
  )
}



export default App
