import { GET_USERPIC } from "../actions/user.actions";

const initialState = {};

export default function userPicReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERPIC:
      return action.payload;

    default:
      return state;
  }
}
