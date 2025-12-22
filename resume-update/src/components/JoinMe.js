import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./css/join-me.css";
import "./css/project-snippet.css";

function JoinMe() {
  const {pathname} = useLocation();
  const handleClick = ()=>{
      if(pathname==="/contact"){
        window.scrollTo(0,0);
      }
  }
  return (
    <div className='join-me red-hat-text-large'>
        <h1 style={{color:'#fafafa'}}>Ready to start your project?</h1>
        <h1 style={{color:'#a1a1a1'}}>Let's build amazing things together</h1>
        <Link to="/contact" className='project-button red-hat-text-medium' style={{marginTop:"1em", padding:"1em 2em", textDecoration:"none"}} onClick={handleClick}>Get in touch</Link>
    </div>
  )
}

export default JoinMe