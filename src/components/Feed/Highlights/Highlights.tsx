import React from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";

const Highlights: React.FC = () => {
  return (
    <div className={styles.highlightContainer}>
      <HighlightCover />
      <HighlightTitle />
    </div>
  );
};

export default Highlights;
