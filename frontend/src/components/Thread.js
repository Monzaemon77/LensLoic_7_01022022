import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcomment } from "../actions/comment.actions";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadpost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  const loadmore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(
    () => {
      if (loadpost) {
        dispatch(getPosts(count));
        setLoadPost(false);
        dispatch(getcomment());
        setCount(count + 5);
      }

      window.addEventListener("scroll", loadmore);
      return () => window.removeEventListener("scroll", loadmore);
    },
    [loadpost],
    dispatch
  );
  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post.post_id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
