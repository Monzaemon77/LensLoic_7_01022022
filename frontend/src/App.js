import axios from "axios";
import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import { getUserPic } from "./actions/userPic.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
    if (uid) dispatch(getUserPic(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
