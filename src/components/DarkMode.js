import React, { useState } from 'react'
//#19323C means black in hexdecimal

const DarkMode = ({theme}) => {
    const [position,updatePosition] = useState({justifyContent:"flex-start",backgroundColor:"blue"});

    const [newTheme,updateTheme]=useState("white")
    function handleClick(){
        console.log(newTheme);
        if(newTheme==="white")
        {
            
            updateTheme("#19323C");
            theme("#19323C")
            updatePosition({justifyContent:"flex-end",backgroundColor:"#27FB6B"})
            
        }
        else if(newTheme === "#19323C"){
            updateTheme("white")
            theme("white")
            updatePosition({justifyContent:"flex-start",backgroundColor:"#5235D4"})
        }
    }
  return (
    <div className='toggle-btn-wrapper' onClick={handleClick} style={position}>
        <div className="btn"></div>
    </div>
  )
}

export default DarkMode;