import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const FollowHandler = ({ idtoFollow }) => {
  const userData = useSelector((state) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {};

  const handleUnfollow = () => {};

  useEffect(() => {}, [userData, idtoFollow]);

  return <div>Follow</div>;
};

export default FollowHandler;
