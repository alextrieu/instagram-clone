import React, { useState, useEffect } from "react";
import styles from "../../PostContainer.module.css";
import CommentModal from "../../CommentModal/CommentModal";
import { Post } from "../../../../../types/PostTypes";

type ViewCommentsProps = {
  data: Post;
};
const ViewComments: React.FC<ViewCommentsProps> = ({ data }) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => document.body.classList.remove(styles.noScroll);
  }, [isToggled]);

  return (
    <>
      <button className={styles.viewAllComments} onClick={() => setIsToggled((prev) => !prev)}>
        View all 2 comments
      </button>
      {isToggled && <CommentModal data={data} setIsToggled={setIsToggled} />}
    </>
  );
};

export default ViewComments;
