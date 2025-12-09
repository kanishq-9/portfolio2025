import React from "react";
import "./css/about-me-short.css";
import "./css/content.css";
import { GoRepoForked, GoHeart, GoThumbsup, GoPersonAdd, GoBook    } from "react-icons/go";

function AboutMeShort() {

  const ideasData = [
    {
    "title":"Full-Stack Expertise",
    "desc" : "Building end-to-end applications using React, JavaScript, Java, and modern databases.",
    "icon":<GoRepoForked size={30}/>
  },
  {
    "title":"Clean, Functional Interfaces",
    "desc" : "Crafting user-friendly experiences with a focus on simplicity, usability, and modern design.",
    "icon":<GoHeart size={30}/>
  },
  {
    "title":"Problem-Solver Mindset",
    "desc" : "Turning challenges into efficient solutions with a mix of creativity, logic, and engineering discipline.",
    "icon":<GoThumbsup  size={30}/>
  },
  {
    "title":"Real Industry Experience",
    "desc" : "Hands-on exposure from Zoho and BNP Paribas, working with cloud platforms, REST APIs, testing, and real product workflows.",
    "icon":<GoPersonAdd size={30}/>
  },
  {
    "title":"Continuous Learner",
    "desc" : "Always exploring new technologies, frameworks, and ideas to build better products.",
    "icon":<GoBook size={30}/>
  },
]

const keypointStyling = {
              display: "flex",
              justifyContent:"center",
              alignItems:"center",
              height:"fit-content",
              width:"fit-content",
              backgroundColor:"#3e3e3e",
              borderRadius:"10px",
              margin:"1em", 
              padding:"1em",
              boxSizing:"border-box"
            };

  const displayIdeas = ()=>{
     return  ideasData.map((dataValue)=>{
        return (<div className="ideas-data">
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
          }}>
          <div style={keypointStyling}>{dataValue.icon}</div>
          <div className="ideas-data-title">{dataValue.title}</div>
            </div>
          <div className="ideas-data-desc">{dataValue.desc}</div>
          </div>
        );
      })
  }






  return (
    <div className="about-me-short" style={{ width: "55%" }}>
      <div className=" rubik-medium spacing light-grey">About Me</div>
      <div
        className=" merriweather-sans-normal"
        style={{ fontSize: "xx-large" }}
      >
        Who am I?
      </div>
      <div
        className="rubik-normal light-grey"
        style={{ textAlign: "center", lineHeight: "1.5", fontWeight:"bold" }}
      >
        <p>
          I'm Kanishq R. Purohit, a full-stack developer with 1+ years of experience building clean and functional applications using React, JavaScript, C++, Python, Java, and databases like MySQL, PostgreSQL, and MongoDB. I’ve worked at Zoho as a full-stack developer and interned at BNP Paribas, gaining practical exposure to cloud-based development, REST APIs, testing, and real-world product workflows. My projects span full-stack apps, system tools, and AI/ML work in NLP and malware detection, and I’m driven by a strong interest in creating efficient, impactful digital solutions.
        </p>
      </div>
      <div className="ideas-data-main">
          {displayIdeas()}
      </div>
    </div>
  );
}

export default AboutMeShort;
