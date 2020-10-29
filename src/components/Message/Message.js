import React from "react";
import { Avatar } from "antd";
import "./Message.css";

const Message = ({ timestamp, user, message }) => {
  return (
    <div className="message">
      <Avatar
        style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        src={user.photo}
        className="avatar"
      />
      <div className="message__info">
        <h4>
          @{user.displayName}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
