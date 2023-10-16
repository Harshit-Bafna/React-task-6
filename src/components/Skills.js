// Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>
              Proficient in building responsive web applications using HTML,
              CSS, JavaScript, and modern frameworks like React. Strong
              experience with frontend and backend development.
            </p>
          </div>
          <div className="skill">
            <i className="fas fa-database"></i>
            <h3>Database Management</h3>
            <p>
              Skilled in designing and managing relational databases with SQL.
              Experience in NoSQL database systems for scalable and efficient data
              storage.
            </p>
          </div>
          <div className="skill">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>
              Adept at creating user-friendly interfaces with a focus on
              usability and aesthetics. Proficient in wireframing, prototyping,
              and design tools.
            </p>
          </div>
          <div className="skill">
            <i className="fas fa-cogs"></i>
            <h3>Data Structures & Algorithms</h3>
            <p>
              Strong understanding of fundamental data structures and algorithms.
              Capable of optimizing code and solving complex problems efficiently.
            </p>
          </div>
          <div className="skill">
            <i className="fas fa-code"></i>
            <h3>Backend Development</h3>
            <p>
              Experienced in building server-side applications and RESTful APIs.
              Proficient with server technologies, database management, and
              microservices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
