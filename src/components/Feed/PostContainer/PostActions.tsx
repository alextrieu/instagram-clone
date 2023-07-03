import React from "react";
import styles from "./PostContainer.module.css";

const PostActions: React.FC = () => {
  return (
    <div className={styles.actionsContainer}>
      <div className={styles.actionsIcons}>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comment"></i>
        <i className="fa-regular fa-paper-plane"></i>
      </div>
      <div>
        <i className="fa-regular fa-bookmark"></i>
      </div>
    </div>
  );
};

export default PostActions;
