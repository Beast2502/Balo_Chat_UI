import React from 'react';
import './Profile.css';
import ProfileImg from './assets/download.jpg';

const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className='profileSub'>
        <img className='profImg' src={ProfileImg} alt="profImg" />
      </div>
      <h2>Diana</h2>
    </div>
  );
};

export default Profile;