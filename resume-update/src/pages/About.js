import React from "react";
import "./css/about.css";
import pfp from "../assets/pfp-portfolio.png";
import { saveAs } from "file-saver";
import myFile from "../assets/docs/Kanishq-R-Purohit-Resume.pdf";
import { TiArrowRight } from "react-icons/ti";
import { AiOutlineDownload } from "react-icons/ai";
import { SiGithub, SiLinkedin, SiMedium, SiInstagram   } from "react-icons/si";
import {motion, useMotionValue, useTransform, useSpring} from "framer-motion";
import "./css/contact.css";
import Journey from "../components/Journey";
import Skills from "../components/Skills";

function About() {
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

      const handleClick = function(sm){
        const socialmediaLink=
          {
            github:"https://github.com/kanishq-9",
          
            linkedin:"https://linkedin.com/in/kanishq-purohit",
         
            medium:"https://medium.com/@kanishq09",
          
            instagram:"https://www.instagram.com/rajpurohit.kanishq/"
          }

         window.open(socialmediaLink[sm],"_blank");
        
      }

      const handleDownloadResume = async ()=>{
        const response = await fetch(myFile);
        const blob = await response.blob();
        saveAs(blob, "Kanishq-R-Purohit-Resume.pdf");
      }

  return (
    <div>
    <div className="about-main">
      <div className="about-intro momo-trust-display-small">
        <div>I create scalable solutions that make an impact.</div>
        <div>
          Design
          <TiArrowRight size={40} />
          Build
          <TiArrowRight size={40} />
          Ship
          <TiArrowRight size={40} />
          Repeat
        </div>
        <div className="about-social-link">
          <SiGithub className="social-link" title="Github" size={40} onClick={()=>handleClick("github")}/>
          <SiLinkedin  className="social-link" title="Linked in" size={40} onClick={()=>handleClick("linkedin")}/>
          <SiMedium  className="social-link" title="Medium" size={40} onClick={()=>handleClick("medium")}/>
          <AiOutlineDownload className="social-link" title="Download Resume" size={40} onClick={()=>{
            handleDownloadResume()
          }}/>
          <SiInstagram  className="social-link" title="Instagram" size={40} onClick={()=>handleClick("instagram")}/>
        </div>
      </div>
      <div className="tilt-wrapper">
      <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle:"preserve-3d",
        transform: "translateZ(30px)"
      }}
      >
        <img className="profile-image" src={pfp} alt="profile pic" />
      </motion.div>
      </div>
      </div>
      <div style={{width:"100%"}}>
        <Journey />
      </div>
      <div>
        <Skills />
      
    </div>
    </div>
  );
}

export default About;
