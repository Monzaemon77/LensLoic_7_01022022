import { DELETE_POST, GET_POSTS, UPDATE_POST } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case UPDATE_POST:
      return state.map((post) => {
        if (post.post_id === action.payload.postId) {
          return {
            ...post,
            post_body: action.payload.text,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.post_id !== action.payload.postId);
    default:
      return state;
  }
}
