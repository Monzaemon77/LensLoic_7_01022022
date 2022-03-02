import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import userPicReducer from "./userPic.reducer";

export default combineReducers({
  userReducer,
  userPicReducer,
});
