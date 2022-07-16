import React from 'react';
import ChatImage from "../Profile/assets/download.jpg";
import './ChatCard.css';

const ChatCard = ({ name, message, time, messageCount }) => {
  return (
    <div className='chatCardContainer'>
      <div>
        <img className='chatCardImg' src={ChatImage} alt="chatImage" />
      </div>
      <div className='chatCardSubContainer w-100'>
        <div className='chatUserName'>
          {name}
        </div>
        <span className='chatMessage'>
          {message}
        </span>
      </div>
      <div className="">
        <div className='chatTime'>{time}</div>
        <div className='chatCardCount'>{messageCount}</div>
      </div>
    </div >
  );
};

export default ChatCard;