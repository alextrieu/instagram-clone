import React, { useState } from "react";
import styles from "./PostContainer.module.css";

type PostCaptionProps = {
  username: string;
  caption: string;
};

const PostCaption: React.FC<PostCaptionProps> = ({ caption, username }) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxLength = 80;

  function handleExpandClick() {
    setExpanded(!isExpanded);
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
