import React from "react";
import styles from "./Feed.module.css";

import PostContainer from "./PostContainer/PostContainer";
import Highlights from "./Highlights/Highlights";

const Feed: React.FC = () => {
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
        <li className={styles.postListItem}>
          <PostContainer />
        </li>
        <li className={styles.postListItem}>
          <PostContainer />
        </li>
      </ul>
    </div>
  );
};

export default Feed;
