import React from "react";
import styles from "./PostContainer.module.css";
import { User } from "../../../types/PostTypes";

type PostLikesProps = {
  username: User[];
  profilePics: User[];
};

const PostLikes: React.FC<PostLikesProps> = ({ username, profilePics }) => {
  return (
    <div className={styles.likesContainer}>
      <div className={styles.likesProfilePics}>
        {profilePics.map((pic, index) => (
          <button key={index} className={styles.profilePicButton}>
            <img src={pic.profilePic} />
          </button>
        ))}
      </div>
      <div className={styles.likesStats}>
        <span>Liked by </span>
        <button className={styles.likerUsernameButton}>{username[0].username}</button>
        {" and "}
        <button className={styles.otherLikersButton}>
          <span>others</span>
        </button>
      </div>
    </div>
  );
};

export default PostLikes;
