import React from 'react';
import "./css/project-snippet.css";
import "./css/join-me.css";
import ProjectCanvas from './ProjectCanvas';
import { Link } from 'react-router-dom';

function ProjectSnippet() {
  return (
    <div className='project-snippet asap-desc-small'>
        <div className='project-canvas'>
            <ProjectCanvas />
        </div>
        <div className='project-snippet-desc'>
            <div style={{margin:"20px 10px", textAlign:"center"}}>
            Continue Exploring
            </div>
            <Link style={{textDecoration:"none"}} className='project-button red-hat-text-medium' to="/projects">
                Projects
            </Link>
        </div>
        </div>
  )
}

export default ProjectSnippet