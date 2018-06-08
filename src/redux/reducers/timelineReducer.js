import {
  START_TIMELINE,
  INCREASE_YEAR,
  DECREASE_YEAR,
  END_TIMELINE,
  TIMELINE_LENGTH
} from "../types";

const initialState = {
  minYear: 1914,
  maxYear: 1982,
  currentYear: 1914
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMELINE:
      return { ...state };
    case INCREASE_YEAR: {
      return {
        ...state,
        currentYear:
          state.currentYear < state.maxYear
            ? state.currentYear + 1
            : state.currentYear
      };
    }
    case DECREASE_YEAR: {
      return {
        ...state,
        currentYear:
          state.currentYear > state.minYear
            ? state.currentYear - 1
            : state.currentYear
      };
    }
    case TIMELINE_LENGTH: {
      return {
        ...state,
        currentYear:
          state.currentYear > state.minYear
            ? state.currentYear - 1
            : state.currentYear
      };
    }
    default:
      return state;
  }
};
