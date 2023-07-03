import React from "react";
import styles from "./PostContainer.module.css";

type PostHeaderProps = {
  username: string;
  profilePic: string;
  location: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ username, profilePic, location }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <button className={styles.postProfilePic}>
          <img src={profilePic} className={styles.profileIcon} />
        </button>
        <div>
          <ul className={styles.postMeta}>
            <li className={styles.postProfileName}>
              <a href="#">{username}</a>
            </li>
            <li className={styles.postTimeStamp}>1 hr</li>
          </ul>
          <a href="#" className={styles.postLocation}>
            {location}
          </a>
        </div>
      </div>
      <button className={styles.moreInfo}>
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </div>
  );
};

export default PostHeader;
