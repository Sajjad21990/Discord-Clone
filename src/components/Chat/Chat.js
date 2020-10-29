import React, { useEffect, useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import {
  PlusCircleOutlined,
  GifOutlined,
  GiftOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./Chat.css";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import {
  menuToggle,
  selectChannelId,
  selectChannelName,
} from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase/firebase";
import firebase from "firebase";

const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const toggle = useSelector(menuToggle);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className={`chat ${!toggle ? "active" : ""}`}>
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <PlusCircleOutlined className="chat__inputIcon" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            className="chat__inputBtn"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <GiftOutlined className="chat__inputIcon" />
          <GifOutlined className="chat__inputIcon" />
          <SmileOutlined className="chat__inputIcon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
