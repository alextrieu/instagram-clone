import styles from "./CommentModal.module.css";
import { useState } from "react";

const PostComments = () => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className={styles.addCommentContainer}>
      <form className={styles.commentFormContainer}>
        <button className={styles.emojiButton}>
          <i className="fa-regular fa-face-smile"></i>
        </button>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Add a comment..."
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          autoComplete="off"
        />
        <button className={`${styles.postBtn} ${inputFocused ? styles.focused : ""}`}>Post</button>
      </form>
    </div>
  );
};

export default PostComments;
