import React, { useEffect, useLayoutEffect, useRef } from 'react';
import icon from "../icon/apple-touch-icon.png";
import { Link } from 'react-router-dom';
import "./css/navbar.css";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

function Navbar() {
    const navref = useRef();
    useLayoutEffect(()=>{
        if(!navref.current) return;
        const updateHeight = ()=>{
            const height = navref.current.offsetHeight;
            document.documentElement.style.setProperty(
                "--navbar-height",
                `${height}px`
            ); 
        }
        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        observer.observe(navref.current);

        return ()=>observer.disconnect();
    },[]);
    const activateTab = (e)=>{
        const select = e.target.closest('.nav-menu');
        if(select){
            const noOfMenu = e.target.closest(".nav-content").children.length;
            for(let i=0; i<noOfMenu; i++){
                e.target.closest(".nav-content").children[i].classList.remove('active');
            }
            requestAnimationFrame(()=>{
                select.classList.add("active");
            });
        }
    }

    const {contextSafe} = useGSAP();
    const startNavAnimation=contextSafe(()=>{
        gsap.from('.logo img, .nav-content, .contact-email',{
            y:'10px',
            duration:1,
            opacity:0,
            stagger:0.3
        })
    });

    useEffect(()=>{
        startNavAnimation();
    })

    const handleClick=function(){
        window.location.href = `mailto:kanishq.r.purohit9@gmail.com`;
      }

  return (
    <div className='navbar momo-trust-display-regular' ref={navref}>
        <div className='logo'>
            <img src={icon} alt='logo'/>
        </div>
        <div className='nav-content'onClick={activateTab}>
            <Link className='link nav-home nav-menu active' to="/">
                <div>
                Home
                </div>
                <div className='underline'>
                </div>
            </Link>
            <Link className='link nav-about nav-menu' to="/about">
            <div>
                About
                </div>
                <div className='underline'>
                </div>
                </Link>
                <Link className='link nav-projects nav-menu' to="projects">
                <div>
                Projects
                </div>
                <div className='underline'>
                </div>
                </Link>
            <Link className='link nav-contact nav-menu' to="contact">
                <div>
                Contact
                </div>
                <div className='underline'>
                </div>
            </Link>
        </div>
        <div className="contact-email" onClick={handleClick?handleClick:undefined}> 
            Email Me
        </div>
    </div>
  )
}

export default Navbar