import { PLAY_VIDEO, STOP_VIDEO } from '../types';

export const playVideo = url => {
  // const id = url.match(/\d/gi).join('');
  return {
    type: PLAY_VIDEO,
    url
  };
};

export const stopVideo = () => {
  return {
    type: STOP_VIDEO
  };
};
