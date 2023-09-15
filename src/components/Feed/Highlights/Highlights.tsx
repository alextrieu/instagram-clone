import React, { useState, useEffect } from "react";
import styles from "./Highlights.module.css";

import HighlightCover from "./HighlightCover/HighlightCover";
import HighlightTitle from "./HighlightTitle/HighlightTitle";
import { Post } from "../../../types/PostTypes";
import HighlightModal from "./HighlightModal/HighlightModal";

type HighlightProps = {
  data: Post;
  activeHighlightIndex: number | null;
  allHighlights: Post[];
  index: number;
  setActiveHighlightIndex: React.Dispatch<React.SetStateAction<null | number>>;
  id: string;
};

const Highlights: React.FC<HighlightProps> = ({
  data,
  setActiveHighlightIndex,
  activeHighlightIndex,
  allHighlights,
  index,
  id,
}) => {
  const [hasActiveStory, setHasActiveStory] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStories, setActiveStories] = useState<Record<string, boolean>>({});

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setActiveHighlightIndex(index);
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const initialStories = {};
    allHighlights.forEach((h) => {
      initialStories[h.id] = true;
    });
    setActiveStories(initialStories);
  }, [allHighlights]);

  const updateActiveStatus = (highlightId: string, status: boolean) => {
    setActiveStories((prev) => ({
      ...prev,
      [highlightId]: status,
    }));
  };

  return (
    <div className={styles.highlightWrapper}>
      <header className={styles.highlightContainer} onClick={handleClick}>
        <button className={styles.highlightBtn}>
          {/* <div className={hasActiveStory ? styles.gradientBorder : styles.noGradiantBorder}> */}
          <div className={activeStories[id] ? styles.gradientBorder : styles.noGradiantBorder}>
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
          activeHighlightIndex={activeHighlightIndex}
          allHighlights={allHighlights}
          setActiveHighlightIndex={setActiveHighlightIndex}
          updateActiveStatus={updateActiveStatus}
          id={id}
        />
      )}
    </div>
  );
};

export default Highlights;
