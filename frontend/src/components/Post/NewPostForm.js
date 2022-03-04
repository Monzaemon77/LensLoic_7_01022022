import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty, timestampParser } from "../Utils";
import iconImg from "../../assets/icons/picture.svg";
import { addPost, getPosts } from "../../actions/post.actions";

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [video, setVideo] = useState("");
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (message || video) {
      const data = new FormData();
      data.append("user_id", userData[0].user_id);
      data.append("text", message);

      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    }
  };

  const cancelPost = () => {
    setMessage("");
    setVideo("");
  };

  //   const handleVideo = () => {
  //     let findLink = message.split(" ");
  //     for (let i = 0; i < findLink.length; i++) {
  //       if (
  //         findLink[i].includes("https://www.youtube") ||
  //         findLink[i].includes("https://youtube")
  //       ) {
  //         let embed = findLink[i].replace("watch?v=", "embed/");
  //         setVideo(embed.split("&")[0]);
  //         findLink.splice(i, 1);
  //         setMessage(findLink.join(" "));
  //       }
  //     }
  //   };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
    // handleVideo();
  }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <NavLink to="/Profil">
            <div className="user-info">Nouveau Post</div>
          </NavLink>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {message || video.length > 20 ? (
              <li className="card-container">
                <div className="card-left"></div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>
                        {userData[0].user_lastname} {userData[0].user_firstname}
                      </h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    {/* {video && (
                      <iframe
                        src={video}
                        title={video}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    )} */}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src={iconImg} alt="icone image" />
                    <input
                      type="text"
                      id="file-upload"
                      name="post_image"
                      accept=".jpg, .jpeg, . png"
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              <div className="btn-send">
                {message || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewPostForm;
