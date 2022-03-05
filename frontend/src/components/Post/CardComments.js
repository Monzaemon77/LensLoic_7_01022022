import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getcomment } from "../../actions/comment.actions";
import { isEmpty, timestampParser } from "../Utils";
import DeleteComment from "./DeleteComment";

const CardComments = ({ post }) => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userId = useSelector((state) =>
    state.userReducer.map((user) => user.user_id)
  );
  const commentData = useSelector((state) => state.commentReducer);
  const userDataAdmin = useSelector((state) =>
    state.userReducer.map((user) => user.user_admin)
  );

  const dispatch = useDispatch();

  const handleComment = async (e) => {
    e.preventDefault();
    if (text) {
      await dispatch(addComment(userId[0], post.post_id, text));
      dispatch(getcomment());
      window.location = "/";
    }
  };

  return (
    <div className="comments-container">
      {commentData.map((comment) => {
        if (comment.post_id === post.post_id)
          return (
            <div
              className={
                comment.commenter_id === userId[0]
                  ? "comment-container client"
                  : "comment-container"
              }
              key={comment.comment_id}
            >
              <div className="left-part"></div>
              <div className="right-part">
                <div className="comment-header">
                  <div className="pseudo">
                    <h3>
                      {!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                          if (user.user_id === comment.commenter_id)
                            return user.user_lastname;
                          else return null;
                        })}{" "}
                      {!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                          if (user.user_id === comment.commenter_id)
                            return user.user_firstname;
                          else return null;
                        })}
                    </h3>
                  </div>
                  <span>{timestampParser(comment.date_update)}</span>
                </div>
                <p>{comment.comment}</p>
              </div>
              {userDataAdmin[0] === 1 && (
                <div className="button-container">
                  <DeleteComment id={comment.comment_id} />
                </div>
              )}
            </div>
          );
        return null;
      })}
      {userId && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Laisser un commentaire"
          />
          <br />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardComments;
