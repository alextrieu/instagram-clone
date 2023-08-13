import React, { useRef, useEffect } from "react";
import styles from "./CommentModal.module.css";
import PostHeader from "../PostHeader";
import PostActions from "../PostActions";
import LikesStatistics from "../LikesStatistics";
import { Post } from "../../../../types/PostTypes";
import PostComments from "./PostComments";
import UserComments from "./UserComments";

type CommentModalProps = {
  data: Post;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentModal: React.FC<CommentModalProps> = ({ data, setIsToggled }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && event.target === modalRef.current) {
      setIsToggled(false);
    }
  };

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <button className={styles.exitModal} onClick={() => setIsToggled((prev) => !prev)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className={styles.modalContent}>
        <div className={styles.headerMobile}>
          <PostHeader username={data.user.username} profilePic={data.user.profilePic} />
        </div>

        <div className={styles.left}>
          <img src={data.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            {" "}
            <PostHeader username={data.user.username} profilePic={data.user.profilePic} />
          </div>

          <div className={styles.commentSectionWrapper}>
            <UserComments
              key={1}
              data={{
                username: data.user.username,
                profilePic: data.user.profilePic,
                commentText: data.caption,
                user: true,
              }}
            />
            {data.comments.map((user, index) => (
              <UserComments key={index} data={user} />
            ))}
          </div>

          <div className={styles.footerContainer}>
            <PostActions />
            <LikesStatistics data={data.likes[0]} />
            <div className={styles.footer}>1 hour ago</div>
          </div>

          <PostComments />
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
