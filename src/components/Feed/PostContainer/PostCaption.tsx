import React from "react";
import styles from "./PostContainer.module.css";

const PostCaption: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.profileLinkButton}>
        {" "}
        <span style={{ fontWeight: "bold" }}>usaswimming </span>
      </a>
      <span>
        Flyin to Fukuoka 💪 Six men punched their tickets to the 2023 @world_aquatics championships last night.
      </span>
      <button className={styles.captionExpandMore}>more</button>
    </div>
  );
};

export default PostCaption;
