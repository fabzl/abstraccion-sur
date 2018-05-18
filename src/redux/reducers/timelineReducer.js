import {
  START_TIMELINE,
  INCREASE_YEAR,
  DECREASE_YEAR,
  END_TIMELINE
} from "../types";

const initialState = {
  minYear: 1900,
  maxYear: 1973,
  currentYear: 1900
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMELINE:
      return { ...state };
    case INCREASE_YEAR: {
      return {
        ...state,
        currentYear: state.currentYear + 1
      };
    }
    case DECREASE_YEAR: {
      return {
        ...state,
        currentYear: state.currentYear - 1
      };
    }
    default:
      return state;
  }
};
