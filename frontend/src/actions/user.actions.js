import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USERPIC = "GET_USERPIC";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const DELETE_USER = "DELETE_USER";

export const getUser = (uid) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/user/${uid}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getUserPic = (uid) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/user/image/${uid}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_USERPIC, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, user_id) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/user/${user_id}`,
      withCredentials: true,
      data: data,
    })
      .then((res) => {
        return axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}api/user/image/${user_id}`,
          withCredentials: true,
        }).then((res) => {
          dispatch({ type: GET_USERPIC, payload: res.data });
        });
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      withCredentials: true,
      data: { bio },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (user_id) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/user/${user_id}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: { user_id } });
      })
      .catch((err) => console.log(err));
  };
};
