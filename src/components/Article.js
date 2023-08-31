import React, { useContext } from 'react'
import imgData from '../data'
import "./comp.css";
import { ThemeContext } from '../App';
const Article = () => {
    const theme=useContext(ThemeContext);
    let style={
        backgroundColor:"",
        color:""
    }
    if(theme==="white")
    {
        style.backgroundColor="white";
        style.color="#19323C"
    }
    else if(theme==="#19323C")
    {
        style.backgroundColor="#19323C";
        style.color="white"
    }
  return (
    <div className="article" style={style}>
        <div className="article-img"> 
        <img src={imgData.url} alt={imgData.alt}/>
        </div>
        <div className='details'>
            <h2>KhudiRam Bose</h2>
            <p>Khudiram Bose (also spelled Kshudiram/Khudiram Basu) (3 December 1889 – 11 August 1908) was an Indian revolutionary from Bengal Presidency who opposed British rule of India. For his role in the Muzaffarpur Conspiracy Case, along with Prafulla Chaki, he was sentenced to death and subsequently executed, making him one of the youngest martyrs of the Indian Independence Movement.[1] </p>
            <p>At the time of his hanging, Khudiram was 18 years, 8 months, and 11 days, 10 hours old making him the second youngest revolutionary in India.[3]</p>
        </div>
    </div>
  )
}

export default Article;