import { combineReducers } from "redux";

import videoReducer from "./videoReducer";
import dataReducer from "./dataReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  video: videoReducer,
  loader: loadingReducer,
  data: dataReducer
});
