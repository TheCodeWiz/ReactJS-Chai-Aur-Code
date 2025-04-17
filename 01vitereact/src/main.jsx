import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom APP ! created by Manav Bhatt</h1>
    </div>
  )
}

// now we had created the reactElement as per our own and not as per the react,and it's syntax are not predefined and are controlled by me
// const reactElement = {
//   type: 'a', // type shows the type of tag or type of element 
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   }, // props shows the properties of the element or tag and props is an object containing key value pair
//   children: 'CLick me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "Manav Bhatt"

// now we are creating the reactElement as per the react and not as per our own

// createElement of react also takes object as input and it's syntax are predefined and are not controlled by me
const reactElement = React.createElement(
  // first expected parameter is tag here
  'a',

  // second expected parameter is object which adds the properties like setAttribute in our customreact.js 
  { 
    href: 'https://google.com',
    target: '_blank'
  },

  // third expected parameter is children but written directly in single or double quotes
  'click me to visit google',

  // variable injection takes place in the last after the whole tree gets created
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // MyApp() // this can also make the code run but it is not the optimized way to do so
    // anotherElement // will run smoothly
    // reactElement // will run smoothly since we have created the object as per the react and as per our wish
)
