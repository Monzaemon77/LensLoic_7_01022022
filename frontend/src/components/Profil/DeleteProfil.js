import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/user.actions";
import iconTrash from "../../assets/icons/trash.svg";
import axios from "axios";
import cookie from "js-cookie";

const DeleteProfil = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deleteUser(props.id));
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer votre compte ?")) {
          deleteQuote();
          const removeCookie = (key) => {
            if (window !== undefined) {
              cookie.remove(key, { expires: 1 });
            }
          };
          axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}api/auth/Logout`,
            withCredentials: true,
          })
            .then(() => {
              removeCookie("jwt");
            })
            .catch((err) => console.log(err));

          window.location = "/";
        }
      }}
    >
      <img src={iconTrash} alt="icon trash" />
    </div>
  );
};

export default DeleteProfil;
