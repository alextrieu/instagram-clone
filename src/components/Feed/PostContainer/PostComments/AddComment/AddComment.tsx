import React from "react";
import styles from "../../PostContainer.module.css";

const AddComment: React.FC = () => {
  return (
    <div className={styles.addCommentContainer}>
      <form className={styles.commentFormContainer}>
        <input type="text" id="fname" name="fname" placeholder="Add a comment..."></input>
      </form>

      <button className={styles.emojiButton}>
        <i className="fa-regular fa-face-smile"></i>
      </button>
    </div>
  );
};

export default AddComment;
