import React from "react";
import styles from "./HighlightModal.module.css";

type User = {
  profilePic: string;
  username: string;
};

type HeaderProps = {
  user: User;
  isPaused: boolean;
  pauseStory: () => void;
  resumeStory: () => void;
};

const Header: React.FC<HeaderProps> = ({ user, isPaused, pauseStory, resumeStory }) => {
  return (
    <header className={styles.modalHeader}>
      <div className={styles.userDetails}>
        <img src={user.profilePic} alt="User Profile" />
        <p className={styles.storyUserName}>{user.username}</p>
        <p className={styles.timeStamp}>4 hr</p>
      </div>
      <div className={styles.modalControls}>
        {isPaused ? (
          <i className="fa-solid fa-play" onClick={resumeStory}></i>
        ) : (
          <i className="fa-solid fa-pause" onClick={pauseStory}></i>
        )}
        <i className="fa-solid fa-volume-xmark"></i>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </header>
  );
};

export default Header;
