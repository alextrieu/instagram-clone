import React from "react";
import styles from "../PostContainer.module.css";

const PostImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <img src="/assets/pic1.jpeg" />
    </div>
  );
};

export default PostImage;
