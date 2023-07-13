import React, { useState } from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";
import { Post } from "../../../types/PostTypes";
import HighlightModal from "./HighlightModal/HighlightModal";

type HighlightProps = {
  data: Post;
};

const Highlights: React.FC<HighlightProps> = ({ data }) => {
  let hasActiveStory = true;
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  return (
    <div className={styles.highlightWrapper}>
      <header className={styles.highlightContainer} onClick={handleClick}>
        <button className={styles.highlightBtn}>
          <div className={hasActiveStory && styles.gradientBorder}>
            <HighlightCover data={data} />
          </div>
          <HighlightTitle data={data} />
        </button>
      </header>

      {modalOpen && <HighlightModal data={data} />}
    </div>
  );
};

export default Highlights;
