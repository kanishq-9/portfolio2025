import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import icon from "../icon/apple-touch-icon.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./css/navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navref = useRef();
  const [open, setOpen] = useState(false);
  let lastHeight = useRef(0);
  useLayoutEffect(() => {
    if (!navref.current) return;
    const updateHeight = () => {
      const height = navref.current.offsetHeight;
      if (height !== lastHeight.current) {
        lastHeight.current = height;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(navref.current);

    return () => observer.disconnect();
  }, []);

  const { contextSafe } = useGSAP();
  const startNavAnimation = contextSafe(() => {
    gsap.from(".nav-content, .contact-email", {
      y: "10px",
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
  });

  useEffect(() => {
    startNavAnimation();
  }, [startNavAnimation]);

  const handleClick = function () {
    window.location.href = `mailto:kanishq.r.purohit9@gmail.com`;
  };

  return (
    <div className="navbar momo-trust-display-regular" ref={navref}>
      <div className="logo">
        <img src={icon} alt="logo" />
      </div>

      <div className="hamburger" onClick={()=>setOpen(!open)}>
        <RxHamburgerMenu />
      </div>


      <div className={`nav-content ${open?"open":""}`}>
        <NavLink className="link nav-home nav-menu" to="/">
          <div>Home</div>
          <div className="underline"></div>
        </NavLink>
        <NavLink className="link nav-about nav-menu" to="/about">
          <div>About</div>
          <div className="underline"></div>
        </NavLink>
        <NavLink className="link nav-projects nav-menu" to="projects">
          <div>Projects</div>
          <div className="underline"></div>
        </NavLink>
        <NavLink className="link nav-contact nav-menu" to="contact">
          <div>Contact</div>
          <div className="underline"></div>
        </NavLink>
      </div>
      <div
        className="contact-email"
        onClick={handleClick ? handleClick : undefined}
      >
        Email Me
      </div>
    </div>
  );
}

export default Navbar;
