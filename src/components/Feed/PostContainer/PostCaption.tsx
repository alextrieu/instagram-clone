import React, { useState } from "react";
import styles from "./PostContainer.module.css";
import { Post } from "../../../types/PostTypes";

type PostCaptionProps = Pick<Post, "caption"> & { username: string };

const PostCaption: React.FC<PostCaptionProps> = ({ caption, username }) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxLength = 80;

  function handleExpandClick() {
    setExpanded((prev) => !prev);
  }

  return (
    <div>
      <a href="#" className={styles.profileLinkButton}>
        {" "}
        <strong>{username} </strong>
      </a>
      {isExpanded ? caption : <span>{caption.substring(0, maxLength)}</span>}
      {!isExpanded && (
        <button onClick={handleExpandClick} className={styles.captionExpandMore}>
          more
        </button>
      )}
    </div>
  );
};

export default PostCaption;
