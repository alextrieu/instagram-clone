import React from "react";
import styles from "../Suggestions.module.css";

interface SuggestionItemProps {
  userData: {
    username: string;
    profilePic: string;
  };
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ userData }) => {
  return (
    <div className={styles.suggestionItem}>
      <div className={styles.suggestionDetails}>
        <img src={userData.profilePic}></img>
        <div className={styles.suggestionInfo}>
          <p>{userData.username}</p>
          <p>followed by nike</p>
        </div>
      </div>
      <a href="#" className={styles.followLink}>
        Follow
      </a>
    </div>
  );
};

export default SuggestionItem;
