import axios from "axios";

// Comment
export const GET_COMMENT = "GET_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export const getcomment = (postid) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/comment/`,
      data: { postid },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_COMMENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (user_id, post_id, comment) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/comment/`,
      data: { user_id, post_id, comment },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { user_id, post_id, comment } });
      })
      .catch((err) => console.log(err));
  };
};
