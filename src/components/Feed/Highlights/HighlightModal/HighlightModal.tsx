import React, { useState, useEffect, useRef } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../../../../../public/assets/Instagram-Wordmark-White-Logo.wine.png";
import HighlightPreview from "./HighlightPreview";

type HighlightModalProps = {
  data: Post;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHasActiveStory: React.Dispatch<React.SetStateAction<boolean>>;
  hasActiveStory: boolean;
  activeIndex: number | null;
  allHighlights: Post[];
  setActiveHighlightIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const HighlightModal: React.FC<HighlightModalProps> = ({
  data,
  handleClick,
  setModalOpen,
  setHasActiveStory,
  hasActiveStory,
  activeIndex,
  setActiveHighlightIndex,
  allHighlights,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const { storyImages = [] } = data.user;
  const timeoutRef = useRef<number | null>(null);
  const remainingTimeRef = useRef(5000);
  const startTimeRef = useRef(Date.now());
  const [lastViewedImageIndex, setLastViewedImageIndex] = useState<number | null>(null);

  function handleInputClicked() {
    setInputClicked((prev) => !prev);
  }

  const advance = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex >= storyImages.length - 1) {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = null;
        setModalOpen(false);
        setLastViewedImageIndex(prevIndex);
        return prevIndex;
      }
      setLastViewedImageIndex(prevIndex + 1);
      return prevIndex + 1;
    });

    startTimeRef.current = Date.now();
    remainingTimeRef.current = 5000;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(advance, remainingTimeRef.current);
  };

  useEffect(() => {
    if (!isPaused && !timeoutRef.current) {
      timeoutRef.current = setTimeout(advance, remainingTimeRef.current);
    }

    if (currentImageIndex >= storyImages.length - 1) {
      setHasActiveStory(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isPaused, storyImages, setModalOpen, currentImageIndex]);

  useEffect(() => {
    localStorage.setItem("index", JSON.stringify(lastViewedImageIndex));
  }, [lastViewedImageIndex]);

  useEffect(() => {
    const localStorageIndex = localStorage.getItem("index");
    if (localStorageIndex) {
      const index = JSON.parse(localStorageIndex);
      console.log(index);
    }
  }, [lastViewedImageIndex]);

  const handlePausePlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (isPaused) {
      setIsPaused(false);
      startTimeRef.current = Date.now();
    } else {
      setIsPaused(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        remainingTimeRef.current -= Date.now() - startTimeRef.current;
      }
    }
  };

  function handleNextImage() {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex >= storyImages.length - 1) {
        remainingTimeRef.current = 5000;
        setIsPaused(false);
        setLastViewedImageIndex(prevIndex);
        return prevIndex;
      }
      setIsPaused(false);
      remainingTimeRef.current = 5000;
      setLastViewedImageIndex(prevIndex + 1);
      return prevIndex + 1;
    });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(advance, remainingTimeRef.current);
  }

  function handlePreviousImage() {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return newIndex + 1;
      } else {
        remainingTimeRef.current = 5000;
        setIsPaused(false);
        setLastViewedImageIndex(newIndex);
        return newIndex;
      }
    });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(advance, remainingTimeRef.current);
  }

  const leftNeighbor1 = allHighlights[activeIndex - 2];
  const leftNeighbor2 = allHighlights[activeIndex - 1];

  const rightNeighbor1 = allHighlights[activeIndex + 1];
  const rightNeighbor2 = allHighlights[activeIndex + 2];

  return (
    <div className={styles.modalContainer}>
      <div className={styles.logo}>
        <a href="#">
          <img src={Logo} className={styles.mainLogo}></img>
        </a>
      </div>
      <div className={styles.exitButton} onClick={handleClick}>
        X
      </div>
      <div
        className={styles.modalContent}
        style={{ backgroundImage: `url(${data.user.storyImages && data.user.storyImages[currentImageIndex]})` }}
      >
        <div className={styles.previousImage}>
          <div className={styles.leftModalContainer}>
            {leftNeighbor1 && leftNeighbor2 && <HighlightPreview neighbor1={leftNeighbor1} neighbor2={leftNeighbor2} />}
            <i className="fa-solid fa-arrow-left" onClick={handlePreviousImage}></i>
          </div>
        </div>
        <div className={styles.nextImage}>
          <div className={styles.rightModalContainer}>
            <i className="fa-solid fa-arrow-right" onClick={handleNextImage}></i>
            {rightNeighbor1 && rightNeighbor2 && (
              <HighlightPreview neighbor1={rightNeighbor1} neighbor2={rightNeighbor2} />
            )}
          </div>
        </div>
        <div className={styles.modalTopSection}>
          <ProgressBar storyImages={data.user.storyImages || []} currentImageIndex={currentImageIndex} />
          <Header user={data.user} handlePausePlay={handlePausePlay} isPaused={isPaused} />
        </div>
        <Footer
          handleInputClicked={handleInputClicked}
          user={data.user}
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputClicked={inputClicked}
        />
      </div>
    </div>
  );
};

export default HighlightModal;
