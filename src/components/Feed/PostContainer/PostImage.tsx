import React from "react";
import styles from "./PostContainer.module.css";

type PostImageProps = {
  image: string;
};

const PostImage: React.FC<PostImageProps> = ({ image }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={image} />
    </div>
  );
};

export default PostImage;
