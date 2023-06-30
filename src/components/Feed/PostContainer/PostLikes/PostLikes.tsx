import React from "react";
import styles from "../PostContainer.module.css";

const PostLikes: React.FC = () => {
  return (
    <div className={styles.likesContainer}>
      <div className={styles.likesProfilePics}>
        <img src="public/assets/pp-1.jpeg"></img>
        <img src="public/assets/pp-2.jpeg"></img>
        <img src="public/assets/pp-3.jpeg"></img>
      </div>
      <div className={styles.likesStats}>
        <span>Liked by </span>
        <span>mtvnews and others</span>
      </div>
    </div>
  );
};

export default PostLikes;
