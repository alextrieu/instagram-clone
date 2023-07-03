import React from "react";
import styles from "./PostContainer.module.css";

const PostHeader: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <button className={styles.postProfilePic}>
          <img src="/assets/profile-icon.jpeg" className={styles.profileIcon} />
        </button>
        <div>
          <ul className={styles.postMeta}>
            <li className={styles.postProfileName}>
              <a href="#">usaswimming</a>
            </li>
            <li className={styles.postTimeStamp}>1 hr</li>
          </ul>
          <a href="#" className={styles.postLocation}>
            Indiana University Nataorium
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
