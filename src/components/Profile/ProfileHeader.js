import React from 'react';
import './Profile.css';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="avatar-container">
        <div className="avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)' }}></div>
        <div className="status-indicator"></div>
      </div>
      <h1>Alexandra Chen</h1>
      <p className="title">Senior UI/UX Designer</p>
      <p className="location">San Francisco, CA</p>
      <div className="badges">
        <span className="badge verified">Verified</span>
        <span className="badge pro">PRO</span>
      </div>
    </div>
  );
};

export default ProfileHeader;