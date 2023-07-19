import React, { useState, useEffect } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";

type HighlightModalProps = {
  data: Post;
};

const HighlightModal: React.FC<HighlightModalProps> = ({ data }) => {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputVallue] = useState("");
  const { storyImages = [] } = data.user;

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputVallue(value);
  }

  function handleInputClicked() {
    setInputClicked((prev) => !prev);
  }

  useEffect(() => {
    // Interval that advances the image index every second (1000ms)
    const advanceInterval = setInterval(() => {
      setcurrentImageIndex((prevIndex) => {
        // If we're at the last image, don't advance
        if (prevIndex >= storyImages.length - 1) {
          return prevIndex;
        }
        // Otherwise, advance to the next image
        return prevIndex + 1;
      });
    }, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(advanceInterval);
  }, [data.user.storyImages]);

  function nextImage() {
    setcurrentImageIndex((prevIndex) => {
      if (prevIndex >= storyImages.length - 1) {
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }

  return (
    <div className={styles.modalContainer}>
      <div
        className={styles.modalContent}
        style={{ backgroundImage: `url(${data.user.storyImages && data.user.storyImages[currentImageIndex]})` }}
        // style={{ backgroundImage: `url("https://picsum.photos/seed/0ehs1GqO/640/480")` }}
        onClick={nextImage}
      >
        <div className={styles.modalTopSection}>
          <div className={styles.progressContainer}>
            {data.user.storyImages &&
              data.user.storyImages.map((image, index) => (
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
              <p>4 hr</p>
            </div>
            <div className={styles.modalControls}>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-volume-xmark"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </header>
        </div>
        {/* <figure className={styles.imageContainer}>
          <img src={data.user.storyImages && data.user.storyImages[currentImageIndex]} alt="Story" />
        </figure> */}
        <footer className={styles.modalFooter}>
          <input
            type="text"
            placeholder={`Reply to ${data.user.username}...`}
            onClick={handleInputClicked}
            onChange={(e) => handleInputChange(e)}
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
