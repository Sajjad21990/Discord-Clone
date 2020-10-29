import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../features/appSlice";
import "./SidebarChannel.css";

const SidebarChannel = ({ id, channelName }) => {
  const dispath = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispath(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
