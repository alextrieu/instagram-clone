import React from "react";
import styles from "./PostContainer.module.css";
import { User } from "../../../types/PostTypes";

type LikeStatisticsProps = {
  data: User;
};

const LikesStatistics: React.FC<LikeStatisticsProps> = ({ data }) => {
  return (
    <div className={styles.likesStats}>
      <span>Liked by </span>
      <button className={styles.likerUsernameButton}>{data.username}</button>
      {" and "}
      <button className={styles.otherLikersButton}>
        <span>others</span>
      </button>
    </div>
  );
};

export default LikesStatistics;
