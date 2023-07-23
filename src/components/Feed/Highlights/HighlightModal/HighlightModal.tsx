import React, { useState, useEffect, useRef } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";

type HighlightModalProps = {
  data: Post;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HighlightModal: React.FC<HighlightModalProps> = ({ data, handleClick, setModalOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputVallue] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const { storyImages = [] } = data.user;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const remainingTimeRef = useRef(5000);
  const startTimeRef = useRef(Date.now());

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputVallue(value);
  }

  function handleInputClicked() {
    setInputClicked((prev) => !prev);
  }

  const advance = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex >= storyImages.length - 1) {
        clearTimeout(timeoutRef.current);
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
          <div className={styles.progressContainer}>
            {data.user.storyImages &&
              data.user.storyImages.map((_, index) => (
                <div
                  key={index}
                  className={styles.progressBar}
                  style={{
                    backgroundColor:
                      index < currentImageIndex ? "white" : index === currentImageIndex ? "white" : "gray",
                  }}
                ></div>
              ))}
          </div>
          <header className={styles.modalHeader}>
            <div className={styles.userDetails}>
              <img src={data.user.profilePic} alt="User Profile" />
              <p>{data.user.username}</p>
              <p className={styles.timeStamp}>4 hr</p>
            </div>
            <div className={styles.modalControls} onClick={handlePausePlay}>
              {isPaused ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
              <i className="fa-solid fa-volume-xmark"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </header>
        </div>
        <footer className={styles.modalFooter}>
          <input
            type="text"
            placeholder={`Reply to ${data.user.username}...`}
            onClick={handleInputClicked}
            onChange={handleInputChange}
            value={inputValue}
          />
          {!inputClicked && inputValue.length === 0 && (
            <>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-paper-plane"></i>
            </>
          )}
          {inputValue.length !== 0 && <button className={styles.highlightCommentBtn}>Send</button>}
        </footer>
      </div>
    </div>
  );
};

export default HighlightModal;
