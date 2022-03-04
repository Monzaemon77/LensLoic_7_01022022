import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.actions";
import LeftNav from "../LeftNav";
import DeleteProfil from "./DeleteProfil";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userLastname = useSelector((state) =>
    state.userReducer.map((user) => user.user_lastname)
  );
  const userFirstname = useSelector((state) =>
    state.userReducer.map((user) => user.user_firstname)
  );
  const userBio = useSelector((state) =>
    state.userReducer.map((user) => user.user_bio)
  );
  const userId = useSelector((state) =>
    state.userReducer.map((user) => user.user_id)
  );
  const userPic = useSelector((state) => state.userPicReducer[0]);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(userId[0], bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>
        Profil de {userLastname[0]} {userFirstname[0]}
      </h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          {/* {userPic && (
            <img
              src={`${process.env.REACT_APP_API_URL}${userPic.img_url}`}
              alt="user-pic"
            />
          )}
          <UploadImg /> */}
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userBio[0]}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userBio[0]}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider Modification</button>
              </>
            )}
          </div>
          <h4>SUPPRIMER SON COMPTE</h4>
          Cliquez sur la poubelle
          <DeleteProfil id={userId[0]} />
          <h5>Abonnements : A venir</h5>
          <h5>Abonnés : A venir</h5>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
