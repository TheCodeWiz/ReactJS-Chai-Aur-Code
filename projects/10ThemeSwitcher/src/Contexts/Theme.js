// this is the most appropriate approach form industry POV and majority of the industry follow this structure to implement context API
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider

// we can also create custom hooks here which majority of the developers do here 

export default function useTheme(){
    return useContext(ThemeContext)
}
