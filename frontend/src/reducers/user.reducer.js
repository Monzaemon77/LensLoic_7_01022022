import { GET_USER, UPDATE_BIO, UPLOAD_PICTURE } from "../actions/user.actions";

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
      };
    case UPDATE_BIO:
      return state.map((user) => {
        return {
          ...user,
          user_bio: action.payload,
        };
      });

    default:
      return state;
  }
}
