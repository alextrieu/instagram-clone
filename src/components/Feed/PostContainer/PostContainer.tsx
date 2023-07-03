import React from "react";
import styles from "./PostContainer.module.css";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostLikes from "./PostLikes";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments/PostComments";

const PostContainer: React.FC = () => {
  return (
    <article className={styles.container}>
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostLikes />
      <PostCaption />
      <PostComments />
    </article>
  );
};

export default PostContainer;
