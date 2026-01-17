import "./css/journey.css";
import "../pages/css/contact.css";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import school from "../assets/school.png";
import university from "../assets/university.png";
import bnp from "../assets/bnp-paribas.png";
import zoho from "../assets/zoho.png";
import cognisun from "../assets/cognisun.png";

function Journey() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.utils.toArray(".timeline-container").forEach((container) => {
      const line = container.querySelector(".vl-above");
      const icons = container.querySelector(".journey-icons");
      const c1 = container.querySelector(".inner-container-1");
      const c3 = container.querySelector(".inner-container-3");
      gsap.to(line, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
      });
      gsap.fromTo(
        icons,
        {
          backgroundColor: "#0f0f1e",
        },
        {
          backgroundColor: "#8c52ff",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.from(c1,{
        transform: `translateY(-50px)`,
        opacity:0,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
      });
      gsap.from(c3,{
        transform: `translateY(-50px)`,
        opacity:0,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
      });
    });
    
  });

  return (
    <div className="journey-main">
      <h1 className="journey-header momo-trust-display-large">Timeline</h1>
      <div className="timeline momo-trust-display-small">
        <div className="timeline-container ">
          <div className="inner-container-1">
            <div>Completed my schooling and higher secondary at Smt. NDJA Vivekananda Vidyalaya Jr. College, Chennai. Secured a perfect 10/10 CGPA in 10th grade(2016) and achieved 87.33% in the Science stream during 12th(2018).
                <div>
                <a href="https://www.google.com/maps/place/Vivekananda+School/@13.1220483,80.26186,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52659c7ae64b4f:0x331b75f4e760a8b7!8m2!3d13.1220483!4d80.26186!16s%2Fg%2F1tdbjdwl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">visit</a>
                </div>
                </div>
            
          </div>
          <div className="inner-container-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <FaSchool
                className="journey-icons"
                size={30}
                style={{ zIndex: 3 }}
              />
              <div className="vl"></div>
              <div className="vl-above"></div>
            </div>
          </div>
          <div className="inner-container-3">
            <img src={school} alt="school"/>
          </div>
        </div>
        <div className="timeline-container">
          <div className="inner-container-1">
            <div>Completed a 5-month internship at BNP Paribas, Chennai (Feb–Jun 2023) as a Tester, working in both manual and automation testing.
                <div>
                <a href="https://www.google.com/maps/place/BNP+Paribas/@12.9688007,80.2438516,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525d6d67400001:0xbead95f8afe9df09!8m2!3d12.9688007!4d80.2438516!16s%2Fg%2F11dzw8q049?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">visit</a>
                </div>
            </div>
          </div>
          <div className="inner-container-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <TfiBag
                className="journey-icons"
                size={30}
                style={{ zIndex: 3 }}
              />
              <div className="vl"></div>
              <div className="vl-above"></div>
            </div>
          </div>
          <div className="inner-container-3">
            <img src={bnp} alt="bnp paribas"/>
          </div>
        </div>
        <div className="timeline-container">
          <div className="inner-container-1">
            <div>Completed my full-time B.Tech at Amrita Vishwa Vidyapeetham, Chennai Campus in 2023, graduating with an 8.66 CGPA.
                <div>
                <a href="https://www.google.com/maps/place/Amrita+Vishwa+Vidyapeetham,+Chennai/@13.2629694,80.0274183,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52814946112d6f:0x57a644f6f25f9b0c!8m2!3d13.2629694!4d80.0274183!16s%2Fg%2F11cs1f4rhx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">visit</a>
                </div>
            </div>
          </div>
          <div className="inner-container-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <FaUniversity
                className="journey-icons"
                size={30}
                style={{ zIndex: 3 }}
              />
              <div className="vl"></div>
              <div className="vl-above"></div>
            </div>
          </div>
          <div className="inner-container-3">
            <img src={university} alt="university"/>
          </div>
        </div>
        <div className="timeline-container">
          <div className="inner-container-1">
            <div>
                Worked at Zoho from Dec 2023 to Feb 2024 as a Developer, contributing to projects using Lyte JS framework, Struts, Tomcat, and MySQL.
                <div>
                <a href="https://www.google.com/maps/place/Zoho+Corporation+-+South+Plaza/@12.8282113,80.0484661,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f70977fe0e4d:0x3f063d22dd5fc4c2!8m2!3d12.8282061!4d80.051041!16s%2Fg%2F11c1p6_5ls?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">visit</a>
                </div>
            </div>
          </div>
          <div className="inner-container-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <TfiBag
                className="journey-icons"
                size={30}
                style={{ zIndex: 3 }}
              />
              <div className="vl"></div>
              <div className="vl-above"></div>
            </div>
          </div>
          <div className="inner-container-3">
            <img src={zoho} alt="zoho" />
          </div>
        </div>
        <div className="timeline-container">
          <div className="inner-container-1">
            <div>
                Worked at Cognisun from July 2024 to April 2025 as a MERN Developer, building full-stack applications and developing AI chatbots using generative AI APIs.
                <div>
                <a href="https://www.google.com/maps/place/Cognisun+Infotech+Pvt+Ltd/@23.0455106,72.5867786,17z/data=!3m1!4b1!4m6!3m5!1s0x395e846021b14d9b:0x3698c374605ab4a!8m2!3d23.0455057!4d72.5893535!16s%2Fg%2F1q65_1y3s?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">visit</a>
                </div>
            </div>
          </div>
          <div className="inner-container-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <TfiBag
                className="journey-icons"
                size={30}
                style={{ zIndex: 3 }}
              />
            </div>
          </div>
          <div className="inner-container-3">
            <img src={cognisun} alt="cognisun infotech" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
