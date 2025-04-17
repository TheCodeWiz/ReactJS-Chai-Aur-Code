import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


/*
  // one way of routing everything
  const router = createBrowserRouter([
    {
      path: '/', // here nesting is going to happen
      element: <Layout />, // which element to render is provided here i.e. in this case Layout is the element that we need to render
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "About", //this will be visible in the URL 
          element: <About />// what you need to render in order to show the above path in URL
        },
        {
          path: "contact", //this will be visible in the URL 
          element: <Contact />// what you need to render in order to show the above path in URL
        }
      ]// how much nesting you need to do based on your app or web app
    }

  ])
*/

// another way of doing the same thing as done above but in more optimized way is this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> {/* here Route contaning anything inside layout element are outlets which we declared or used in Layout.jsx and rendering is possible only because of usage of outlet in Layout.jsx file */}
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="user/:userId" element={<User />}/> {/*here userId written after colon is very important just remember the name you had given to the user id */}{/*like this you can take dynamic value from the URL */}
      <Route 
      loader={githubInfoLoader} //if you want to fetch any data from any API / Database then you can directly make a call to API / Database from here only even before useEffet hook fetch or make call to an API. it simply means in useEffect hook fetching/calling to API or Database will take place after you click on it but in loader as soon as you hover on it fetching/calling to an API or Database will start and also it saves the info into cache . used for more optimizing. you can write your whole fetching code in this loader by using a callback function 
      path="github" 
      element={<Github />}
      />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* here RouterProvider is nothing but a wrapper wrapped around the whole router which we decalred and defined above  */}
  </React.StrictMode>,
)

// router can be created using the createBrowserRouter() method/function only which is provided by importing react-router-dom
// different different routes are created using createRoutesFromelements() method/function which is provided by importing react-router-dom and all the routes can be nested 