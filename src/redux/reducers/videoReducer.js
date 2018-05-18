import { PLAY_VIDEO, STOP_VIDEO } from "../types";

const initialState = {
  showVideo: false,
  scrollY: 0,
  url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return {
        ...state,
        scrollY: window.scrollY,
        url: action.url,
        showVideo: true
      };
    case STOP_VIDEO:
      return initialState;
    default:
      return state;
  }
};
