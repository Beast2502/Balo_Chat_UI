import React from 'react';
import Profile from '../../components/Profile/Profile';
import ChatConatiner from '../../components/ChatContainer/ChatContainer';
import AddImg from "./assets/addAccount.svg";
import "./MainContainer.css";

// Main conatiner for inner Chat
const MainContainer = () => {
  return (
    <>
      <Profile />
      <ChatConatiner />
      <div className='addImg'>
        <img className='addImgSvg' src={AddImg} alt="alt time" />
      </div>
    </>
  );
};

export default MainContainer;