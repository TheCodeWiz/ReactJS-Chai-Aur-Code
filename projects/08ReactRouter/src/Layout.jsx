import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // with the help of outlet we can perform nesting in main.jsx 

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout