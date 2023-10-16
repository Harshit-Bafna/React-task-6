// Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="section-title">Project</h2>
        <div className="project-card">
          <div className="project-details">
            <h3>Swastik - Health Care Website</h3>
            <p>
              Swastik Healthcare is a comprehensive platform that offers a wide range
              of healthcare services and products, including doctor appointments, lab
              tests, medicines, gym facilities, informative blogs, and surgical procedures.
            </p>
            <p>
              <strong>Technology:</strong> HTML/CSS, JavaScript, SQL, PHP, Ajax
              <br />
              <strong>Team:</strong> 2 members
              <br />
              <strong>Role:</strong> Backend and database
            </p>
            <a
              href="https://github.com/Harshit-Bafna/Swastik"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub repository link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
