import axios from "axios";

// Comment
export const GET_COMMENT = "Get_COMMENT";

export const getcomment = (postid) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/comment/`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_COMMENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
