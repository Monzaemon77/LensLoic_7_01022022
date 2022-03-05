import axios from "axios";

// Comment
export const GET_COMMENT = "GET_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

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

export const addComment = (commenter_id, post_id, comment) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/comment/`,
      data: { commenter_id, post_id, comment },
      withCredentials: true,
    });
  };
};

export const deleteComment = (commentId) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/comment/${commentId}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { commentId } });
      })
      .catch((err) => console.log(err));
  };
};
