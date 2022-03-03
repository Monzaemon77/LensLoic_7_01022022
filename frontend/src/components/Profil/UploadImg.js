import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer[0]);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstname", userData.user_firstname);
    data.append("lastname", userData.user_lastname);
    data.append("bio", userData.user_bio);
    data.append("profil_image", file);

    dispatch(uploadPicture(data, userData.user_id));
  };

  return (
    <>
      <form action="" onSubmit={handlePicture} className="upload-pic">
        <label htmlFor="file">Changer l'image</label>
        <input
          type="file"
          id="file"
          name="profil_image"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
};

export default UploadImg;
