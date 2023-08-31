import "./style.css"
import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
import { createContext, useState } from "react";
import Article from "./components/Article";
export const ThemeContext = createContext();
function App() {
  const [theme,setTheme]=useState()
  const setNewTheme = (message)=>{
    
    setTheme(message);
  }
  return(
    <>
    
    <DarkMode theme={setNewTheme}/>
    {/* <p>{theme}</p> */}
    <ThemeContext.Provider value={theme}>
      <Header/>
      <Article/>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
