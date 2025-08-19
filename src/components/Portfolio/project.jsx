import React from 'react';
import '../Portfolio/project.css';
import MobileAppImage from '../../assets/united.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="highlighted-project-title">Highlighted Project</h2>

      {/* Regular Project Grid */}
      <div className="regular-projects-grid">
        {/* Project Card 1 */}
        <a href="https://unitedlearning.in" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <img
              src={MobileAppImage}
              alt="Dynamic Mobile App"
              className="project-card-image"
            />
            <div className="project-card-details">
              <h3>United Learning</h3>
            </div>
          </div>
        </a>

        {/* Project Card 2 */}
        {/*
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x300/2ecc71/ffffff?text=Web+Design"
            alt="Travel Agency Website"
            className="project-card-image"
          />
          <div className="project-card-details">
            <h3>Travel Agency Website</h3>
          </div>
        </div>
        */}

        {/* Project Card 3 */}
        {/*
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x300/f1c40f/ffffff?text=Portfolio+Site"
            alt="Personal Portfolio"
            className="project-card-image"
          />
          <div className="project-card-details">
            <h3>Personal Portfolio</h3>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Projects;