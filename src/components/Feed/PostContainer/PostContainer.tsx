import React from "react";
import styles from "./PostContainer.module.css";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostLikes from "./PostLikes";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments/PostComments";

import { Post } from "../../../data/MockData";

type FeedProps = {
  data: Post;
};

const PostContainer: React.FC<FeedProps> = ({ data }) => {
  return (
    <article className={styles.container}>
      <PostHeader username={data.user.username} profilePic={data.user.profilePic} location={data.location} />
      <PostImage image={data.image} />
      <PostActions />
      <PostLikes username={data.user.username} profilePics={data.likes} />
      <PostCaption caption={data.caption} username={data.user.username} />
      <PostComments />
    </article>
  );
};

export default PostContainer;
