import React from "react";
import styles from "./Suggestions.module.css";
import SuggestionItem from "./SuggestionItem/SuggestionItem";

interface User {
  username: string;
  profilePic: string;
}

const Suggestions: React.FC = () => {
  const data: User[] = [
    { username: "nba", profilePic: "src/assets/profile-icon.jpeg" },
    { username: "twitter", profilePic: "src/assets/profile-icon.jpeg" },
    { username: "instagram", profilePic: "src/assets/profile-icon.jpeg" },
    { username: "google", profilePic: "src/assets/profile-icon.jpeg" },
    { username: "microsoft", profilePic: "src/assets/profile-icon.jpeg" },
  ];

  // Map over data, creating a new SuggestionItem for each user

  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestionsHeader}>
        <p className={styles.suggestionsTitle}>Suggested for you</p>
        <a href="#" className={styles.seeAllLink}>
          See All
        </a>
      </div>

      <div className={styles.listOfSuggestionsContainer}>
        {data.map((suggestion: User, index: number) => (
          <SuggestionItem key={index} userData={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
