import React from "react";
import "./ChatContainer.css";

import ChatCard from "../ChatCard/ChatCard";

function ChatContainer() {

  // dummy dat for the chat
  const userData = [
    {
      name: "Sarah",
      message: "hy this sarah,this is to ",
      time: "11:45pm",
      messageCount: 0,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 2,
    },
    {
      name: "james",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 5,
    },
    {
      name: "Jessica",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 6,
    },
    {
      name: "John",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },
    {
      name: "Smith",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 45,
    },
    {
      name: "Sarah",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 5,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    }
    ,
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },
    {
      name: "Michael",
      message: "hy this sarah",
      time: "11:45pm",
      messageCount: 10,
    },

  ];
  return (
    <div className="chatContainer">
      {userData.map((data) => (
        <ChatCard
          name={data.name}
          message={data.message}
          time={data.time}
          messageCount={data.messageCount}
        />
      )
      )}
    </div>
  );
}

export default ChatContainer;
