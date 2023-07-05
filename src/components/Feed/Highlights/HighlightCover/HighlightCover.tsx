import React from "react";
import styles from "../Highlights.module.css";
import { Post } from "../../../../types/PostTypes";

type HighlightCoverProps = {
  data: Post;
};

const HighlightCover: React.FC<HighlightCoverProps> = ({ data }) => {
  return <img src={data.user.profilePic} className={styles.profilePic}></img>;
};

export default HighlightCover;
