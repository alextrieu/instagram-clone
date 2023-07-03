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
  postData: Post;
};

const PostContainer: React.FC<FeedProps> = ({ postData }) => {
  return (
    <article className={styles.container}>
      <PostHeader
        username={postData.user.username}
        profilePic={postData.user.profilePic}
        location={postData.location}
      />
      <PostImage image={postData.image} />
      <PostActions />
      <PostLikes username={postData.user.username} profilePics={postData.likes} />
      <PostCaption caption={postData.caption} username={postData.user.username} />
      <PostComments />
    </article>
  );
};

export default PostContainer;
