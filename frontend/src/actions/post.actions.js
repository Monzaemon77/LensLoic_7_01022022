import axios from "axios";

// posts
export const GET_POSTS = "Get_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = (num) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/post/`,
      withCredentials: true,
    })
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/post/`,
      withCredentials: true,
      data: data,
    });
  };
};

export const updatePost = (postId, text, user_id) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
      data: { text, user_id },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { text, postId, user_id } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};
