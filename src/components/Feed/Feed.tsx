import React from "react";
import styles from "./Feed.module.css";
import { Post } from "../../data/MockData";

import PostContainer from "./PostContainer/PostContainer";
import Highlights from "./Highlights/Highlights";

type FeedProps = {
  data: Post[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
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
        {data.map((post, index) => (
          <li key={index} className={styles.postListItem}>
            <PostContainer data={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
