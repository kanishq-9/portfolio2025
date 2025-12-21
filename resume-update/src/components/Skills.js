import React from "react";
import "../pages/css/contact.css";
import "./css/skills.css";
import jsLogo from "../assets/js-logo.svg";
import express from "../assets/express.svg";
import firebase from "../assets/firebase.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import mongo from "../assets/mongo.svg";
import mysql from "../assets/mysql.svg";
import node from "../assets/node.svg";
import postgre from "../assets/postgre.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import ts from "../assets/ts.svg";

function Skills() {
  return (
    <div className="skills-main">
      <h1 className="Skills-header momo-trust-display-large">Skills</h1>
      <div className="skills-content-container">
        <div className="skills-content">
          <div className="cell-division">
            <div className="big-box">
              <img
                className="skills-image"
                src={jsLogo}
                alt="javascript logo"
                title="Javascript"
              />
              <div className="skills-title">Javascript</div>
            </div>
            <div className="small-box">
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={firebase}
                  alt="firebase logo"
                  title="Firebase"
                />
                <div className="skills-title">Firebase</div>
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={mysql} alt="mysql logo" title="Mysql" />
                <div className="skills-title">MySQL</div>
              </div>
            </div>
          </div>
          <div className="cell-division">
            <div className="small-box">
              <div className="small-box-skills">
                <img className="skills-image" src={mongo} alt="mongo logo" title="MongoDB" />
                <div className="skills-title">MongoDB</div>
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={ts} alt="ts logo" title="Typescript" />
                <div className="skills-title">Typescript</div>
              </div>
            </div>
            <div className="big-box">
              <img className="skills-image" src={react} alt="react logo" title="React" />
              <div className="skills-title">React</div>
            </div>
          </div>
        </div>
        <div className="skills-content">
          <div className="cell-division">
            <div className="big-box">
              <img className="skills-image" src={java} alt="java logo" title="Java"/>
              <div className="skills-title">Java</div>
            </div>
            <div className="small-box">
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={postgre}
                  alt="postgre sql logo"
                  title="Postgre SQL"
                />
                <div className="skills-title">Postgre SQL</div>
              </div>
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={express}
                  alt="express js logo"
                  title="Express Js"
                />
                <div className="skills-title">Express</div>
              </div>
            </div>
          </div>
          <div className="cell-division">
            <div className="small-box">
              <div className="small-box-skills">
                <img className="skills-image" src={python} alt="python logo" title="Python"/>
                <div className="skills-title">Python</div>
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={git} alt="git logo" title="Git" />
                <div className="skills-title">Git</div>
              </div>
            </div>
            <div className="big-box">
              <img className="skills-image" src={node} alt="node js logo" title="Node" />
              <div className="skills-title">node</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
