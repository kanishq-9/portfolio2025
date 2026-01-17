import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./css/project.css";
import CircleCard from "../components/CircleCard";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const mainContainer = useRef(null);
  const textGroupRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 600;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: isMobile ? "+=250%" : "+=400%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(textGroupRef.current, {
        scale: isMobile ? 180 : 400,
        transformOrigin: "50% 50%",
        ease: "power2.in",
      }, 0)
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
      }, "-=0.5")
      .to(".grid-column:nth-child(1)", { y: isMobile ? "-120vh" : "-200vh", ease: "none" }, ">")
    .to(".grid-column:nth-child(2)", { y: isMobile ? "-150vh" : "-250vh", ease: "none" }, "<")
    .to(".grid-column:nth-child(3)", { y: isMobile ? "-100vh" : "-180vh", ease: "none" }, "<");

    }, mainContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainContainer} className="project-wrapper">
      <section className="project-main">
        <div className="background-animate">
            <CircleCard />
        </div>

        <svg className="text-mask" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="text-reveal">
              <rect width="100" height="100" fill="white" />
              <g ref={textGroupRef}>
                <text x="50" y="50" textAnchor="middle" dominantBaseline="central" 
                      fontSize="12" fontWeight="900" fill="black">
                  PROJECTS
                </text>
              </g>
            </mask>
          </defs>
          <rect ref={overlayRef} width="100" height="100" fill="black" mask="url(#text-reveal)" />
        </svg>
      </section>
    </div>
  );
}

export default Projects;