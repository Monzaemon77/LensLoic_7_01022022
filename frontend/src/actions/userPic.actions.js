import axios from "axios";

export const GET_USERPIC = "GET_USERPIC";

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
