import styles from "./CommentModal.module.css";

type UserCommentsProps = {
  data: {
    username: string;
    profilePic: string;
    commentText: string;
    user?: boolean;
  };
};

const UserComments: React.FC<UserCommentsProps> = ({ data }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.comment}>
        <img className={styles.profilePicture} src={data.profilePic} />

        <div className={styles.commentDetails}>
          <div className={styles.userSection}>
            <div className={styles.username}>
              <strong>{data.username}</strong>
            </div>
            <div className={styles.userComment}>{data.commentText}</div>
          </div>

          {!data.user && (
            <div className={styles.commentMeta}>
              <div className={styles.timePosted}>1 hr</div>
              <div className={styles.commentLikes}>35 likes</div>
              <div className={styles.commentReply}>Reply</div>
            </div>
          )}
        </div>
      </div>

      {!data.user && (
        <div className={styles.commentLike}>
          <i className="fa-regular fa-heart"></i>
        </div>
      )}
    </div>
  );
};

export default UserComments;
