import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  DownOutlined,
  PlusOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  SettingOutlined,
  AudioOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
import cell from "../../signal.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase/firebase";
import { deviceWidth, menuToggle } from "../../features/appSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const toggle = useSelector(menuToggle);
  const width = useSelector(deviceWidth);

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter A New Channel Name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className={`sidebar ${!toggle && width <= 800 ? "active" : ""}`}>
      <div className="sidebar__top">
        <h3>DISCORD APP</h3>
        <DownOutlined />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar_channelHeader">
          <div className="sidebar_header">
            <DownOutlined className="sidebar_addChannel" />
            <h3>Channels</h3>
          </div>
          <PlusOutlined
            className="sidebar_addChannel"
            onClick={handleAddChannel}
          />
        </div>
        <div className="sidebar__channelList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <img src={cell} alt="cell" className="sidebar__voice__icon" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoCircleOutlined className="sidebar__voiceInfoIcon" />
          <PhoneOutlined className="sidebar__voiceInfoIcon" />
        </div>
      </div>
      <div className="sidebar_profile">
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            cursor: "pointer",
          }}
          src={user.photo}
          className="avatar"
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__profileInfo">
          <h3>@{user.displayName}</h3>
          <p>#{user.uid.substring(0, 7)}</p>
        </div>

        <div className="sidebar_profileIcons sidebar__voiceIcons">
          <AudioOutlined className="sidebar__voiceInfoIcon" />
          <CustomerServiceOutlined className="sidebar__voiceInfoIcon" />
          <SettingOutlined className="sidebar__voiceInfoIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
