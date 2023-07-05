import React from "react";
import styles from "./PostContainer.module.css";
import { User } from "../../../types/PostTypes";

type PostLikesProps = {
  data: User[];
};

const PostLikes: React.FC<PostLikesProps> = ({ data }) => {
  return (
    <div className={styles.likesContainer}>
      <div className={styles.likesProfilePics}>
        {data.map((pic, index) => (
          <button key={index} className={styles.profilePicButton}>
            <img src={pic.profilePic} />
          </button>
        ))}
      </div>
      <div className={styles.likesStats}>
        <span>Liked by </span>
        <button className={styles.likerUsernameButton}>{data[0].username}</button>
        {" and "}
        <button className={styles.otherLikersButton}>
          <span>others</span>
        </button>
      </div>
    </div>
  );
};

export default PostLikes;
