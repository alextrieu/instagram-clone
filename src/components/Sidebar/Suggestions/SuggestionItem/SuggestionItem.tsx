import React from "react";
import styles from "../Suggestions.module.css";
import { User } from "../../../../types/PostTypes";

interface SuggestionItemProps {
  user: User;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ user }) => {
  return (
    <div className={styles.suggestionItem}>
      <div className={styles.suggestionDetails}>
        <button className={styles.profilePicBtn}>
          <img src={user.profilePic}></img>
        </button>
        <div className={styles.suggestionInfo}>
          <button className={styles.usernameBtn}>{user.username}</button>
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
