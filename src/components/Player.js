import style from "./Player.module.css";
import "./Player.module.css";
import video from "public/videos/sample_960x540.mp4";
import img1 from "public/film_miniatures/irishman.jpg";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShare } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import CommentSection from "./commentSection";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { motion } from "framer-motion";

const likesList = { name: "Irlandczyk", like: 120, dislike: 19 };

const Player = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [iconFavorites, setIconFavorites] = useState(star);

  const likeHandler = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      //Temporary
      likesList.like++;

      setIsLiked(true);
      setIsDisliked(false);
    }
  };

  const dislikeHandler = () => {
    if (isDisliked) {
      setIsDisliked(false);
    } else {
      //Temporary
      likesList.dislike++;

      setIsDisliked(true);
      setIsLiked(false);
    }
  };

  const favoritesHandler = () => {
    if (iconFavorites == star) {
      setIconFavorites(faStar);
    } else {
      setIconFavorites(star);
    }
  };

  const commentHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.videoBox}>
        <div className={style.vidBox}>
          <ReactPlayer
            url={video}
            playing={true}
            controls={true}
            muted={false}
            light={
              "https://firebasestorage.googleapis.com/v0/b/onlineshop-eb044.appspot.com/o/itemsImages%2Firishman.jpg?alt=media&token=ea97bc71-5d10-4b4c-b4fb-a19dcb37fd69"
            }
            image={img1}
            className={style.video}
            width={"70vw"}
            height={"80vh"}
          />
        </div>
        <div className={style.optionPanel}>
          <div className={style.leftBox}>
            <h1>{likesList.name}</h1>
            <div className={style.thumbPanel}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: `${isClicked === item.number ? 2 : 1}` }}
                className={style.thumbBox}
              >
                {isLiked && (
                  <AiFillLike onClick={likeHandler} className={style.icon} />
                )}
                {!isLiked && (
                  <AiOutlineLike onClick={likeHandler} className={style.icon} />
                )}
                <p>{likesList.like}</p>
              </motion.div>
              <div className={style.thumbBox}>
                {isDisliked && (
                  <AiFillDislike
                    onClick={dislikeHandler}
                    className={style.icon}
                  />
                )}
                {!isDisliked && (
                  <AiOutlineDislike
                    onClick={dislikeHandler}
                    className={style.icon}
                  />
                )}
                <p>{likesList.dislike}</p>
              </div>
            </div>
          </div>
          <div className={style.rightBox}>
            <div className={style.shareBox}>
              <FontAwesomeIcon icon={faShare} className={style.shareIcon} />
            </div>
            <FontAwesomeIcon
              icon={iconFavorites}
              className={style.iconRight}
              onClick={favoritesHandler}
            />
            <AiOutlineComment
              className={style.iconRight}
              onClick={commentHandler}
            />
          </div>
        </div>
        {isOpen && (
          <div className={style.commentSection}>
            <CommentSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
