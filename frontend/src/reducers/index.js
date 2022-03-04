import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import userPicReducer from "./userPic.reducer";
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";
import commentReducer from "./comment.reducer";

export default combineReducers({
  userReducer,
  userPicReducer,
  usersReducer,
  postReducer,
  commentReducer,
});
