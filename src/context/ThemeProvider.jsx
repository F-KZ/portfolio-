import { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext()
const LOCALSTORAGE = "colorScheme"
// Dark mode exercise
export const ThemeProvider = ({ children }) => {
  // const theme = "light";
  const [ theme, setTheme ] = useState('dark')

  
  
  const isDark = theme === 'dark'
  const isLight = theme === 'light'

  useEffect(() => {
    const getScheme = localStorage.getItem(LOCALSTORAGE)

    if(getScheme){
      setTheme(getScheme)
      return
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

  const handleChange = () => {
    // en fonction du prefers-color-scheme, tu peux setter le theme
    setTheme(mediaQuery.matches ? " light" : "dark")
  };

  mediaQuery.addEventListener('change', handleChange);
  handleChange();

    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  function toggleTheme() {
    setTheme((curr) => {
    const newTheme = curr === 'dark' ? 'light' : 'dark'
    localStorage.setItem(LOCALSTORAGE, newTheme)
    return newTheme
    })
  }  

  const values = { theme, toggleTheme, isDark, isLight }

  return <ThemeContext.Provider value = { values }>{children}</ThemeContext.Provider>


  
};

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
};
