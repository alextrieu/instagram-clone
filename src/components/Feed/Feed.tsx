import React, { useState } from "react";
import styles from "./Feed.module.css";
import { Post } from "../../types/PostTypes";

import PostContainer from "./PostContainer/PostContainer";
import Highlights from "./Highlights/Highlights";

type FeedProps = {
  data: Post[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);

  return (
    <div className={styles.feed}>
      <div className={styles.highlightFeed}>
        {data.slice(0, 8).map((obj, index) => (
          <Highlights
            key={obj.id}
            data={obj}
            index={index}
            setActiveHighlightIndex={setActiveHighlightIndex}
            activeHighlightIndex={activeHighlightIndex}
            allHighlights={data}
            id={obj.id}
          />
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
