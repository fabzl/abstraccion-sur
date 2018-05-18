import {
  START_TIMELINE,
  INCREASE_YEAR,
  DECREASE_YEAR,
  END_TIMELINE
} from "../types";

export const startTimeline = () => {
  return {
    type: START_TIMELINE
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
