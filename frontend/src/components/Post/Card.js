import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import commentIcon from "../../assets/icons/message1.svg";
import iconShare from "../../assets/icons/share.svg";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const commentData = useSelector((state) => state.commentReducer);

  useEffect(() => {
    isEmpty(usersData[0] && setIsLoading(false));
  }, [usersData]);

  return (
    <li className="card-container" key={post.post_id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">Photo Profil</div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user.user_id === post.user_id)
                        return user.user_lastname;
                      else return null;
                    })}{" "}
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user.user_id === post.user_id)
                        return user.user_firstname;
                      else return null;
                    })}
                </h3>
              </div>
              <span>{dateParser(post.datecreate)}</span>
            </div>
            <p>{post.post_body}</p>
            <div className="card-footer">
              <div className="comment-icon">
                <img src={commentIcon} alt="comment" />
                {!isEmpty(commentData[0]) &&
                  commentData.map((comment) => {
                    if (comment.post_id === post.post_id)
                      return (
                        <span key={comment.comment_id}>
                          {commentData.length}
                        </span>
                      );
                    else return null;
                  })}
              </div>
              <h6>Like button</h6>
              <img src={iconShare} alt="icon share" />
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
