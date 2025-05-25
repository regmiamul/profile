import React from 'react';
import './Profile.css';

const ProfileProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Complete redesign of analytics dashboard for large e-commerce platform',
      tags: ['UI Design', 'Dashboard', 'Analytics'],
      likes: 124,
      views: 856
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'User experience redesign for financial mobile application',
      tags: ['UX Research', 'Mobile', 'Finance'],
      likes: 98,
      views: 723
    },
    {
      id: 3,
      title: 'Health & Fitness Tracker',
      description: 'New approach to health tracking with personalized insights',
      tags: ['UI/UX', 'Health', 'Mobile'],
      likes: 156,
      views: 1024
    }
  ];

  return (
    <div className="profile-projects">
      <div className="projects-header">
        <h2>Recent Projects</h2>
        <button className="view-all">View All</button>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image" style={{ backgroundColor: getRandomColor() }}></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-stats">
                <span className="stat"><i className="heart-icon">❤</i> {project.likes}</span>
                <span className="stat"><i className="eye-icon">👁</i> {project.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function for random project card colors
const getRandomColor = () => {
  const colors = ['#FFEE93', '#FFC09F', '#A0CED9', '#ADF7B6', '#FFC6FF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default ProfileProjects;