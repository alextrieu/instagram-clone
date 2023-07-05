import React from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";
import { Post } from "../../../types/PostTypes";

type HighlightProps = {
  data: Post;
};

const Highlights: React.FC<HighlightProps> = ({ data }) => {
  // const [hasActiveStory, setHasActiveStory] = React.useState(true);
  let hasActiveStory = true;

  return (
    <header className={styles.highlightContainer}>
      <button className={styles.highlightBtn}>
        <div className={hasActiveStory ? styles.gradientBorder : undefined}>
          <HighlightCover data={data} />
        </div>
        <HighlightTitle data={data} />
      </button>
    </header>
  );
};

export default Highlights;
