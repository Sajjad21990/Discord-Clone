import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
    deviceWidth: null,
    menuToggle: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },

    setDeviceWidth: (state, action) => {
      state.deviceWidth = action.payload.deviceWidth;
    },

    toggleMenu: (state, action) => {
      state.menuToggle = action.payload.menuToggle;
    },
  },
});

export const { setChannelInfo, setDeviceWidth, toggleMenu } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export const deviceWidth = (state) => state.app.deviceWidth;
export const menuToggle = (state) => state.app.menuToggle;

export default appSlice.reducer;
