import React from "react";
import styles from "./Feed.module.css";
import { Post } from "../../types/PostTypes";

import PostContainer from "./PostContainer/PostContainer";
import Highlights from "./Highlights/Highlights";

type FeedProps = {
  data: Post[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
  return (
    <div className={styles.feed}>
      <div className={styles.highlightFeed}>
        {data.slice(0, 8).map((obj, index) => (
          <Highlights key={index} data={obj} />
        ))}
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
