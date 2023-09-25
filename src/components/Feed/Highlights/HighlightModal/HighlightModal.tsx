import React, { useState, useEffect } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../../../../assets/Instagram-Wordmark-White-Logo.wine.png";
// import HighlightPreview from "./HighlightPreview";
// import HighlightCover from "../HighlightCover/HighlightCover";

type HighlightModalProps = {
  currentStory: Post | null;
  navigateImage: (direction: "LEFT" | "RIGHT") => void;
  closeModal: () => void;
  timerId: number | null;
  setTimerId: React.Dispatch<React.SetStateAction<number | null>>;
  prevStories: Post[] | null;
  nextStories: Post[] | null;
};

const HighlightModal: React.FC<HighlightModalProps> = ({
  currentStory,
  navigateImage,
  closeModal,
  timerId,
  setTimerId,
  prevStories,
  nextStories,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const pauseStory = () => {
    setIsPaused(true);
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    const now = Date.now();
    if (startTime) {
      const timeElapsed = now - startTime;
      setElapsedTime((prev) => prev + timeElapsed);
    }
  };

  const resumeStory = () => {
    setIsPaused(false);
    const remainingTime = 4000 - elapsedTime;
    const id = setTimeout(
      () => {
        navigateImage("RIGHT");
      },
      remainingTime > 0 ? remainingTime : 0
    );
    setTimerId(id);
    setStartTime(Date.now());
  };

  useEffect(() => {
    setElapsedTime(0);
    setStartTime(Date.now());
  }, [currentStory]);

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
        <div className={styles.modalTopSection}>
          <ProgressBar
            storyImages={(currentStory && currentStory.user.storyImages) || []}
            currentImageIndex={currentStory?.currentSegment || 0}
          />

          {currentStory?.user && (
            <Header user={currentStory.user} isPaused={isPaused} pauseStory={pauseStory} resumeStory={resumeStory} />
          )}
        </div>
        {currentStory && <Footer user={currentStory.user} />}

        <button onClick={() => navigateImage("LEFT")} className={styles.leftBtn}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
        <button onClick={() => navigateImage("RIGHT")} className={styles.rightBtn}>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>

        <div className={styles.leftSideContainer}>
          {prevStories?.map((story) => (
            <div
              className={styles.leftSideUsers}
              style={{
                backgroundImage: `url(${story.user.storyImages && story.user.storyImages[0]})`,
              }}
            >
              <div className={styles.userInfo}>
                <img src={story.user.profilePic} />
                <p className={styles.leftSideUserName}>{story.user.username}</p>
                <p>1d</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rightSideContainer}>
          {nextStories?.map((story) => (
            <div
              className={styles.rightSideUsers}
              style={{
                backgroundImage: `url(${story.user.storyImages && story.user.storyImages[0]})`,
              }}
            >
              <div className={styles.userInfo}>
                <img src={story.user.profilePic} />
                <p className={styles.rightSideUserName}>{story.user.username}</p>
                <p>1d</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightModal;
