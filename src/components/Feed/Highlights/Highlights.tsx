import React, { useState } from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";
import { Post } from "../../../types/PostTypes";
import HighlightModal from "./HighlightModal/HighlightModal";

type HighlightProps = {
  data: Post;
  activeIndex: number | null;
  allHighlights: Post[];
  index: number;
  setActiveHighlightIndex: React.Dispatch<React.SetStateAction<null | number>>;
};

const Highlights: React.FC<HighlightProps> = ({ data, setActiveHighlightIndex, activeIndex, allHighlights, index }) => {
  const [hasActiveStory, setHasActiveStory] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setActiveHighlightIndex(index);
    setModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.highlightWrapper}>
      <header className={styles.highlightContainer} onClick={handleClick}>
        <button className={styles.highlightBtn}>
          <div className={hasActiveStory ? styles.gradientBorder : styles.noGradiantBorder}>
            <HighlightCover data={data} />
          </div>
          <HighlightTitle data={data} />
        </button>
      </header>

      {modalOpen && (
        <HighlightModal
          data={data}
          handleClick={handleClick}
          setModalOpen={setModalOpen}
          setHasActiveStory={setHasActiveStory}
          hasActiveStory={hasActiveStory}
          activeIndex={activeIndex}
          allHighlights={allHighlights}
          setActiveHighlightIndex={setActiveHighlightIndex}
        />
      )}
    </div>
  );
};

export default Highlights;
