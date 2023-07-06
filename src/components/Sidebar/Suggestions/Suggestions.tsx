import React from "react";
import styles from "./Suggestions.module.css";
import SuggestionItem from "./SuggestionItem/SuggestionItem";
import { SuggestUser } from "../../../types/PostTypes";
import { generateSuggestUser } from "../../../data/MockData";

const Suggestions: React.FC = () => {
  const suggestUsers: SuggestUser[] = Array.from({ length: 5 }, () => generateSuggestUser());

  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestionsHeader}>
        <p className={styles.suggestionsTitle}>Suggested for you</p>
        <a href="#" className={styles.seeAllLink}>
          See All
        </a>
      </div>

      <div className={styles.listOfSuggestionsContainer}>
        {suggestUsers.map((user, index) => (
          <SuggestionItem key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
