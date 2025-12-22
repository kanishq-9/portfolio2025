import React from 'react';
import "./css/circlecard.css";

// Importing local assets
import event from "../assets/project/eventmanagement.png";
import forkify from "../assets/project/forkify.png";
import game from "../assets/project/game.png";
import nasa from "../assets/project/nasa.png";
import mapty from "../assets/project/mapty.png";
import matchmaker from "../assets/project/matchmaker.png";
import newsapp from "../assets/project/newsapp.png";
import sorting from "../assets/project/sorting.png";
import watchtogether from "../assets/project/watchtogether.png";

function CircleCard() {
  // 1. Refactored into an array of objects
  const projectData = [
    { name: "Event Management", img: event, link: "https://github.com/kanishq-9/event-management" },
    { name: "Forkify", img: forkify, link: "https://github.com/kanishq-9/javaScript" },
    { name: "Pro Game", img: game, link: "https://github.com/kanishq-9/javaScript" },
    { name: "Mapty", img: mapty, link: "https://github.com/kanishq-9/javaScript" },
    { name: "NASA Project", img: nasa, link: "https://github.com/kanishq-9/NASA-PROJECT" },
    { name: "Matchmaker", img: matchmaker, link: "https://github.com/kanishq-9/matchmaker" },
    { name: "News App", img: newsapp, link: "https://github.com/kanishq-9/newApi_React" },
    { name: "Sorting playground", img: sorting, link: "https://github.com/kanishq-9/sorting-visuals" },
    { name: "In Progress", img: watchtogether, link: "https://github.com/kanishq-9/work-together" }, // Placeholder for 9th slot
  ];

  return (
    <div className='circle-card-main'>
      <div className="grid-container">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="grid-column">
            {[0, 1, 2].map((rowIndex) => {
              const project = projectData[colIndex * 3 + rowIndex];
              return (
                <div key={rowIndex} className="grid-item">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} alt={project.name} />
                    <div className="project-title">{project.name}</div>
                  </a>
                  {colIndex === 1 && rowIndex === 1 && (
                    <div className="item-label">CLICK US</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircleCard;