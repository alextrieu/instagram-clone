import React from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";

const Highlights: React.FC = () => {
  // const [hasActiveStory, setHasActiveStory] = React.useState(true);
  let hasActiveStory = true;

  return (
    <header className={styles.highlightContainer}>
      <button className={styles.highlightBtn}>
        <div className={hasActiveStory ? styles.gradientBorder : undefined}>
          <HighlightCover />
        </div>
        <HighlightTitle />
      </button>
    </header>
  );
};

export default Highlights;
