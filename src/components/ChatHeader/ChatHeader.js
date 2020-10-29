import React from "react";
import "./ChatHeader.css";
import {
  BellOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  SendOutlined,
  QuestionCircleOutlined,
  AlignLeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deviceWidth, menuToggle, toggleMenu } from "../../features/appSlice";

const ChatHeader = ({ channelName }) => {
  const width = useSelector(deviceWidth);
  const toggle = useSelector(menuToggle);

  const dispatch = useDispatch(toggleMenu);

  return (
    <div className="chatHeader">
      {width <= 800 ? (
        <div
          onClick={() =>
            dispatch(
              toggleMenu({
                menuToggle: !toggle,
              })
            )
          }
        >
          {!toggle ? (
            <AlignLeftOutlined
              className="left__menu"
              style={{ color: "#fff" }}
            />
          ) : (
            <CloseOutlined className="left__menu" style={{ color: "#fff" }} />
          )}
        </div>
      ) : null}

      <div className="chatHeader__left">
        <h2>
          <span className="chatHeader_hash">#</span>
          {channelName}
        </h2>
      </div>
      <div className="chatHeader__right">
        <BellOutlined className="chatHeaderIcon" />
        <EnvironmentOutlined className="chatHeaderIcon" />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchOutlined className="chatHeaderIcon" />
        </div>
        <SendOutlined className="chatHeaderIcon" />
        <QuestionCircleOutlined className="chatHeaderIcon" />
      </div>
    </div>
  );
};

export default ChatHeader;
