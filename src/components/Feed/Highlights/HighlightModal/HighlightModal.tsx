import React, { useState } from "react";
import { Post } from "../../../../types/PostTypes";
import styles from "./HighlightModal.module.css";

type HighlightModalProps = {
  data: Post;
};

const HighlightModal: React.FC<HighlightModalProps> = ({ data }) => {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputVallue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputVallue(value);
  }

  function handleInputClicked() {
    setInputClicked((prev) => !prev);
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.progressContainer}>
          {data.user.storyImages &&
            data.user.storyImages.map((image, index) => (
              <div
                key={index}
                className={styles.progressBar}
                style={{
                  backgroundColor: index < currentImageIndex ? "white" : index === currentImageIndex ? "white" : "gray",
                }}
              ></div>
            ))}
        </div>
        <header>
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
        <figure className={styles.imageContainer}>
          <img src={data.user.storyImages && data.user.storyImages[currentImageIndex]} alt="Story" />
        </figure>
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
