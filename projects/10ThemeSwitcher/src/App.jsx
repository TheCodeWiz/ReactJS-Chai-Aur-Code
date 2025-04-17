import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'

function App() {
  
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
     // since the code is running at the client side 
     document.querySelector('html').classList.remove("light", "dark") // this line of code means that select every query from the html document whose classes have light and dark or both as their properties for theme and then remove that query
     document.querySelector('html').classList.add(themeMode) // this line of code means that select every query from the html document whose classes have properties for theme and then add that to query
  }, [themeMode])


  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
