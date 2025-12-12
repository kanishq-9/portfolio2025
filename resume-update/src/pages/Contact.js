import React, { useState } from "react";
import "../pages/css/contact.css";
import { TiPhoneOutline, TiLocation  } from "react-icons/ti";


function Contact() {
  const [show, setShow] = useState(false);

  const contact = [
    {
      type:"Email",
      value:"kanishq.r.purohit9@gmail.com",
      icon:<TiPhoneOutline size={25}/>,
      handleClick:function(){
        window.location.href = `mailto:${this.value}`;
      }
    },
    {
      type:"Phone",
      value:"+91-637-965-4265",
      icon:<TiPhoneOutline size={25}/>,
      handleClick:function(){
        navigator.clipboard.writeText(this.value);
        setShow(true);
        setTimeout(()=>setShow(false),2000);
      }
    },
    {
      type:"Location",
      value:"Chennai, Tamilnadu, India",
      icon:<TiLocation size={(25)} />,
      handleClick:function(){        
        const map = "https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0479859,79.8789951,10z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D";
        window.open(map);
      }
    }
  ]
  const contactShow=()=>{
    return (
      contact.map(value=>{
        return(
        <div className="contact-data-main" onClick={value.handleClick ? () => value.handleClick() : undefined} >
          <div className="contact-data-icon">{value.icon}</div>
          <div >
          <div className="momo-trust-display-small">{value.type}</div>
          <div style={{
            fontFamily:'sans-serif',
            color:"#95a1a1"
          }}>{value.value}</div>
          </div>
        </div>
        )
      })
    )
  }

  return (
    <div className="contact-main">
      <div className={`message ${show?"show":null}`}>Text copied</div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 className=" momo-trust-display-large">Get in touch</h1>
        <h3 style={{ color: "#a1a19c" }}>
          Want to collaborate or share an idea? I’d love to hear from you. let’s
          create something great together.
        </h3>
      </div>
      <div className="contact-main-flex">
        {contactShow()}
      </div>
    </div>
  );
}

export default Contact;
