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
            </div>
            <div className="small-box">
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={firebase}
                  alt="firebase logo"
                  title="Firebase"
                />
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={mysql} alt="mysql logo" title="Mysql" />
              </div>
            </div>
          </div>
          <div className="cell-division">
            <div className="small-box">
              <div className="small-box-skills">
                <img className="skills-image" src={mongo} alt="mongo logo" title="MongoDB" />
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={ts} alt="ts logo" title="Typescript" />
              </div>
            </div>
            <div className="big-box">
              <img className="skills-image" src={react} alt="react logo" title="React" />
            </div>
          </div>
        </div>
        <div className="skills-content">
          <div className="cell-division">
            <div className="big-box">
              <img className="skills-image" src={java} alt="java logo" title="Java"/>
            </div>
            <div className="small-box">
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={postgre}
                  alt="postgre sql logo"
                  title="Postgre SQL"
                />
              </div>
              <div className="small-box-skills">
                <img
                  className="skills-image"
                  src={express}
                  alt="express js logo"
                  title="Express Js"
                />
              </div>
            </div>
          </div>
          <div className="cell-division">
            <div className="small-box">
              <div className="small-box-skills">
                <img className="skills-image" src={python} alt="python logo" title="Python"/>
              </div>
              <div className="small-box-skills">
                <img className="skills-image" src={git} alt="git logo" title="Git" />
              </div>
            </div>
            <div className="big-box">
              <img className="skills-image" src={node} alt="node js logo" title="Node" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
