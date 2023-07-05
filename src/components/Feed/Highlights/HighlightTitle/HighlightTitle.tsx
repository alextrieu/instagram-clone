import React from "react";
import styles from "../Highlights.module.css";
import { Post } from "../../../../types/PostTypes";

type HighlightTitleProps = {
  data: Post;
};

const HighlightTitle: React.FC<HighlightTitleProps> = ({ data }) => {
  const displayUserName = data.user.username;
  return (
    <p className={styles.userName}>
      {displayUserName.length > 7 ? displayUserName.substring(0, 9) + "..." : displayUserName}
    </p>
  );
};

export default HighlightTitle;
