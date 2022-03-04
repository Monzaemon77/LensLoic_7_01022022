import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import commentIcon from "../../assets/icons/message1.svg";
import iconShare from "../../assets/icons/share.svg";
import iconEdit from "../../assets/icons/edit.svg";
import { getPosts, updatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const userId = useSelector((state) =>
    state.userReducer.map((user) => user.user_id)
  );
  const commentData = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post.post_id, textUpdate, userId[0]));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    isEmpty(usersData[0] && setIsLoading(false));
  }, [usersData]);

  return (
    <li className="card-container" key={post.post_id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left"></div>
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
            {isUpdated === false && <p>{post.post_body}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.post_body}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            )}
            {userId[0] === post.user_id && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src={iconEdit} alt="icon edit" />
                </div>
                <DeleteCard id={post.post_id} />
              </div>
            )}
            {userData[0].user_admin === 1 && (
              <div className="button-container">
                <DeleteCard id={post.post_id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComment(!showComment)}
                  src={commentIcon}
                  alt="comment"
                />
                {!isEmpty(commentData) &&
                  commentData.map((comment) => {
                    if (comment.post_id === post.post_id)
                      return (
                        <span key={comment.comment_id}>
                          {/* {commentData.length} */}
                        </span>
                      );
                    else return null;
                  })}
              </div>
              <h6>Like button</h6>
              <img src={iconShare} alt="icon share" />
            </div>
            {/* {showComment && <CardComments post={post} />} */}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
