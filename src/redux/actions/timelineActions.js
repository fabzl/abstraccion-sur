import {
  START_TIMELINE,
  INCREASE_YEAR,
  DECREASE_YEAR,
  END_TIMELINE,
  SET_YEAR,
  TIMELINE_LENGTH
} from "../types";

export const startTimeline = () => {
  return {
    type: START_TIMELINE
  };
};

export const timelineLength = () => {
  return {
    type: TIMELINE_LENGTH
  };
};

export const setYear = () => {
  return {
    type: SET_YEAR
  };
};

export const increaseYear = () => {
  console.log("increaseYear");
  return {
    type: INCREASE_YEAR
  };
};

export const decreaseYear = () => {
  console.log("decreaseYear");
  return {
    type: DECREASE_YEAR
  };
};

export const endTimeline = () => {
  return {
    type: END_TIMELINE
  };
};
