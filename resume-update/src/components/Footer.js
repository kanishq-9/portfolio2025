import React from 'react';
import "./css/footer.css";
import Logo from "../assets/logo.png";
import {motion, useMotionValue, useTransform, useSpring} from "framer-motion";

function Footer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const rotateY = useTransform(xSpring,[-0.5,0.5],["-17.5deg","17.5deg"]);
  const rotateX = useTransform(ySpring,[-0.5,0.5],["17.5deg","-17.5deg"]);

  const handleMouseMove = (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left);
    const mouseY = (e.clientY - rect.top);
    const xper = (mouseX/width)-0.5;
    const yper = (mouseY/height)-0.5;

    x.set(xper);
    y.set(yper);
  }

  const handleMouseLeave = ()=>{
    x.set(0);
    y.set(0);
  }

  return (
    
    <footer className='footer'>
      <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        style={{
        height:"6em",
        width:"6em",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#D3D3D3",
        rotateX,
        rotateY,
        transformStyle:"preserve-3d",
        borderRadius:"10px"
      }}
      >
      <img 
      src={Logo}
      alt='logo'
      style={{
        height:"5em",
        width:"5em",
        transform:"translateZ(25px)",
        pointerEvents: "none",
        borderRadius:"10px"
      }}
      />
      </motion.div>
        <div className='merriweather-sans-normal footer-name'>
            Kanishq R Purohit
            </div>
    <div className='signika-allrights allrights'>
© 2025. All rights reserved.
    </div>
    </footer>
  )
}

export default Footer