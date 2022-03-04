import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import iconTrash from "../../assets/icons/trash.svg";

const DeleteCard = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deletePost(props.id));
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cer article ?")) {
          deleteQuote();
          window.location = "/";
        }
      }}
    >
      <img src={iconTrash} alt="icon trash" />
    </div>
  );
};

export default DeleteCard;
