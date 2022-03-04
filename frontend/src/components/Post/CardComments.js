import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";

const CardComments = () => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userId = useSelector((state) =>
    state.userReducer.map((user) => user.user_id)
  );
  const commentData = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    if (text) {
      const data = new FormData();
      data.append("user_id");
      data.append("post_id");
      data.append("comment");
    }
  };

  return (
    <div className="comments-container">
      {commentData.map((comment) => {
        return (
          <div
            className={
              comment.user_id === userId[0]
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
                        if (user.user_id === comment.user_id)
                          return user.user_lastname;
                        else return null;
                      })}{" "}
                    {!isEmpty(usersData[0]) &&
                      usersData.map((user) => {
                        if (user.user_id === comment.user_id)
                          return user.user_firstname;
                        else return null;
                      })}
                  </h3>
                </div>
                <span>{timestampParser(comment.date_update)}</span>
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        );
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
