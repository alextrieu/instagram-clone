import React, { useState, useEffect, useRef } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Footer from "./Footer";

type HighlightModalProps = {
  data: Post;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HighlightModal: React.FC<HighlightModalProps> = ({ data, handleClick, setModalOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const { storyImages = [] } = data.user;
  const timeoutRef = useRef<number | null>(null);
  const remainingTimeRef = useRef(5000);
  const startTimeRef = useRef(Date.now());

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
        return prevIndex;
      }
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

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isPaused, storyImages, setModalOpen]);

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
        return prevIndex;
      }
      setIsPaused(false);
      remainingTimeRef.current = 5000;
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
        return newIndex;
      }
    });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(advance, remainingTimeRef.current);
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.exitBotton} onClick={handleClick}>
        X
      </div>

      <div
        className={styles.modalContent}
        style={{ backgroundImage: `url(${data.user.storyImages && data.user.storyImages[currentImageIndex]})` }}
      >
        <div className={styles.previousImage} onClick={handlePreviousImage}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={styles.nextImage} onClick={handleNextImage}>
          <i className="fa-solid fa-arrow-right"></i>
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
