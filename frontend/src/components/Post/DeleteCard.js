import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/comment.actions";
import iconTrash from "../../assets/icons/trash.svg";

const DeleteCard = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deleteComment(props.id));
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
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
