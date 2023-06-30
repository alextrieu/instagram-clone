import React from "react";
import styles from "./PostContainer.module.css";

import PostHeader from "./PostHeader/PostHeader";
import PostImage from "./PostImage/PostImage";
import PostActions from "./PostActions/PostActions";
import PostLikes from "./PostLikes/PostLikes";
import PostCaption from "./PostCaption/PostCaption";
import PostComments from "./PostComments/PostComments";

const PostContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostLikes />
      <PostCaption />
      <PostComments />
    </div>
  );
};

export default PostContainer;
