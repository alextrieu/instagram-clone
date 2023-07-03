import React from "react";
import styles from "./PostContainer.module.css";

const PostLikes: React.FC = () => {
  return (
    <div className={styles.likesContainer}>
      <div className={styles.likesProfilePics}>
        <button className={styles.profilePicButton}>
          <img src="/assets/pp-1.jpeg"></img>
        </button>
        <button className={styles.profilePicButton}>
          <img src="/assets/pp-2.jpeg"></img>
        </button>
        <button className={styles.profilePicButton}>
          <img src="/assets/pp-3.jpeg"></img>
        </button>
      </div>
      <div className={styles.likesStats}>
        <span>Liked by </span>
        <button className={styles.likerUsernameButton}>mtvnews</button>
        {" and "}
        <button className={styles.otherLikersButton}>
          <span>others</span>
        </button>
      </div>
    </div>
  );
};

export default PostLikes;
