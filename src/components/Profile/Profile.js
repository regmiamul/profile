import React from 'react';
import './Profile.css';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileSkills from './ProfileSkills';
import ProfileProjects from './ProfileProjects';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <ProfileHeader />
        <ProfileStats />
        <ProfileSkills />
      </div>
      <div className="profile-main">
        <ProfileProjects />
      </div>
    </div>
  );
};

export default Profile;