import React from 'react';
import './Profile.css';

const ProfileStats = () => {
  return (
    <div className="profile-stats">
      <div className="stat-item">
        <span className="stat-value">247</span>
        <span className="stat-label">Projects</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">4.9</span>
        <span className="stat-label">Rating</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">98%</span>
        <span className="stat-label">Success</span>
      </div>
    </div>
  );
};

export default ProfileStats;