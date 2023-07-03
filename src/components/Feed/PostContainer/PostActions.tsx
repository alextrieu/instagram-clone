import React from "react";
import styles from "./PostContainer.module.css";

const PostActions: React.FC = () => {
  return (
    <div className={styles.actionsContainer}>
      <div className={styles.actionsIcons}>
        <button className={styles.likeIcon}>
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className={styles.commentIcon}>
          <i className="fa-regular fa-comment"></i>
        </button>
        <button className={styles.shareIcon}>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
      <div>
        <button className={styles.bookmarkIcon}>
          <i className="fa-regular fa-bookmark"></i>
        </button>
      </div>
    </div>
  );
};

export default PostActions;
