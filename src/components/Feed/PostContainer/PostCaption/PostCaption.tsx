import React from "react";
import styles from "../PostContainer.module.css";

const PostCaption: React.FC = () => {
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>usaswimming </span>
      <span>
        Flyin to Fukuoka 💪 Six men punched their tickets to the 2023 @world_aquatics championships last night.
      </span>
      <a href="#" className={styles.captionExpandMore}>
        more
      </a>
    </div>
  );
};

export default PostCaption;
