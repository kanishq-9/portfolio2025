import React, { useEffect, useRef } from "react";
import "./css/content.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowDown } from "react-icons/go";
import ProjectSnippet from "./ProjectSnippet";
import AboutMeShort from "./AboutMeShort";

function Content() {
    const goDown = useRef();
  const descArray =
    "Transforming ideas into impact through custom web app solutions.".split(
      ""
    );
  const adminhName = "Kanishq R Purohit".split(" ");
  const { contextSafe } = useGSAP();
  const description = contextSafe(() => {
    gsap.from(".desc-waves", {
      y: -40,
      opacity: 0,
      duration: 0.3,
      ease: "sine.out",
      stagger: 0.01,
    });

    gsap.from(".name-waves", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
      stagger: 0.15,
    });

    gsap.from(goDown.current, {
      y: 5,
      duration: 1,
      yoyo:true,
      repeat:-1
    });



  });

  useEffect(() => {
    description();
  });

  return (
    <div className="content">
      <div className="intro">
        <div className="font-canela-bold name">
          {adminhName.map((element, idx) => {
            return (
              <span
                className="name-waves"
                style={{ display: "inline-block" }}
                key={idx}
              >
                {element}
                {"\u00A0"}
              </span>
            );
          })}
        </div>
        <div className="font-canela-light canela-light-content">
          {descArray.map((element, idx) => (
            <span
              style={{ display: "inline-block" }}
              key={idx}
              className="desc-waves"
            >
              {element === " " ? "\u00A0" : element}
            </span>
          ))}
        </div>
        <div className="intro-footer">
            scroll down <GoArrowDown ref={goDown} size={25} />
        </div>
      </div>
      <ProjectSnippet />
      <AboutMeShort />
      
    </div>
  );
}

export default Content;
