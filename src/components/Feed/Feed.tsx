import React from "react";
import styles from "./Feed.module.css";
import { Post } from "../../data/MockData";

import PostContainer from "./PostContainer/PostContainer";
import Highlights from "./Highlights/Highlights";

type FeedProps = {
  postsData: Post[];
};

const Feed: React.FC<FeedProps> = ({ postsData }) => {
  return (
    <div className={styles.feed}>
      <div className={styles.highlightFeed}>
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
      <ul className={styles.postList}>
        {postsData.map((post, index) => (
          <li key={index} className={styles.postListItem}>
            <PostContainer postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
