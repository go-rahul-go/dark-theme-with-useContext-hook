
import "./comp.css";
import React,{useContext, useState} from 'react'
import { ThemeContext } from "../App";
const Header = () => {
  const theme=useContext(ThemeContext);
  let style={
    backgroundColor:"",
    color:"",
    borderBottom:""
  };
  if(theme==="#19323C")
  { 
      style.backgroundColor=theme
      style.color="white";
      style.borderBottom="2px solid white"
  }
  else{
    style.backgroundColor=theme
      style.color="black";
      style.borderBottom="2px solid black"
  }
  
  return (
    <header className="header" style={style}>
        <h1>Unsung Hero of India</h1>
      
    </header>
  )
}

export default Header;