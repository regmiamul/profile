import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-card">
        <div className="bio-header">
          <div className="profile-pic"></div>
          <h1>Your Name</h1>
          <h2>Professional Title</h2>
        </div>
        <div className="bio-content">
          <p className="bio-text">
            Creative and passionate professional with expertise in various fields. 
            Dedicated to creating beautiful, functional solutions with attention to detail.
          </p>
          <div className="bio-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
          <div className="bio-social">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;