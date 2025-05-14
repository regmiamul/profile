import React from 'react';
import './Profile.css';

const ProfileSkills = () => {
  const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 90 },
    { name: 'Figma', level: 98 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Testing', level: 85 }
  ];

  return (
    <div className="profile-skills">
      <h3>Skills</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%`, backgroundColor: getProgressColor(skill.level) }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function for progress bar colors
const getProgressColor = (percent) => {
  if (percent >= 90) return '#4CAF50';
  if (percent >= 80) return '#8BC34A';
  if (percent >= 70) return '#FFC107';
  return '#FF9800';
};

export default ProfileSkills;