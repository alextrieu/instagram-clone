import React, { useState } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
// import Footer from "./Footer";
import Logo from "../../../../assets/Instagram-Wordmark-White-Logo.wine.png";
// import HighlightPreview from "./HighlightPreview";

type HighlightModalProps = {
  currentStory: Post | null;
  navigateImage: (direction: "LEFT" | "RIGHT") => void;
  closeModal: () => void;
  timerId: number | null;
  setTimerId: React.Dispatch<React.SetStateAction<number | null>>;
};

const HighlightModal: React.FC<HighlightModalProps> = ({
  currentStory,
  navigateImage,
  closeModal,
  timerId,
  setTimerId,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePausePlay = () => {
    setIsPaused(true);
    if (timerId !== null) {
      clearTimeout(timerId);
    }
  };

  const resumeStory = () => {
    setIsPaused(false);
    const id = setTimeout(() => {
      navigateImage("RIGHT");
    }, 2000);
    setTimerId(id);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.logo}>
        <a href="#">
          <img src={Logo} className={styles.mainLogo}></img>
        </a>
      </div>
      <div className={styles.exitButton} onClick={closeModal}>
        X
      </div>
      <div
        className={styles.modalContent}
        style={{
          backgroundImage: `url(${
            currentStory?.user.storyImages && currentStory.user.storyImages[currentStory.currentSegment]
          })`,
        }}
      >
        {/* <div className={styles.previousImage}>
          <div className={styles.leftModalContainer}>
            {leftNeighbor1 && leftNeighbor2 && (
              <HighlightPreview
                leftNeighbor1={leftNeighbor1}
                leftNeighbor2={leftNeighbor2}
                activeHighlightIndex={activeHighlightIndex}
                handlePreviewClick={handlePreviewClick}
              />
            )}
            <i className="fa-solid fa-arrow-left" onClick={handlePreviousImage}></i>
          </div>
        </div>
        <div className={styles.nextImage}>
          <div className={styles.rightModalContainer}>
            <i className="fa-solid fa-arrow-right" onClick={handleNextImage}></i>
            {rightNeighbor1 && rightNeighbor2 && (
              <HighlightPreview
                rightNeighbor1={rightNeighbor1}
                rightNeighbor2={rightNeighbor2}
                handlePreviewClick={handlePreviewClick}
                activeHighlightIndex={activeHighlightIndex}
              />
            )}
          </div>
        </div> */}
        {/* <div className={styles.modalTopSection}>
          <ProgressBar storyImages={data.user.storyImages || []} currentImageIndex={currentImageIndex} />
          <Header
            user={allHighlights[activeHighlightIndex].user}
            handlePausePlay={handlePausePlay}
            isPaused={isPaused}
          />
        </div>
        <Footer
          handleInputClicked={handleInputClicked}
          user={allHighlights[activeHighlightIndex].user}
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputClicked={inputClicked}
        /> */}
        <div className={styles.modalTopSection}>
          <ProgressBar
            storyImages={(currentStory && currentStory.user.storyImages) || []}
            currentImageIndex={currentStory?.currentSegment || 0}
          />

          {currentStory?.user && (
            <Header
              user={currentStory.user}
              isPaused={isPaused}
              handlePausePlay={handlePausePlay}
              resumeStory={resumeStory}
            />
          )}
        </div>
        <button onClick={() => navigateImage("LEFT")}>Previous</button>
        <button onClick={() => navigateImage("RIGHT")}>RIGHT</button>
      </div>
    </div>
  );
};

export default HighlightModal;
