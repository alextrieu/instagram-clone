import React from "react";
import styles from "./PostContainer.module.css";
import { User } from "../../../types/PostTypes";
import LikesStatistics from "./LikesStatistics";

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
      {data.slice(0, 1).map((data, index) => {
        return <LikesStatistics data={data} key={index} />;
      })}
    </div>
  );
};

export default PostLikes;
