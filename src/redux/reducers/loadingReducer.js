import { LOADER_LOADING, CONTENT_LOADED, LOADER_VISIBLE } from "../types";

const initialState = {
  loading: true,
  loaded: false,
  visible: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADER_LOADING:
      return { ...state, loading: true };
    case CONTENT_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        visible: true
      };
    }
    case LOADER_VISIBLE: {
      return {
        ...state,
        loading: false,
        loaded: true,
        visible: false
      };
    }
    default:
      return state;
  }
};
