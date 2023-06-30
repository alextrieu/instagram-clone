import React from "react";
import styles from "../PostContainer.module.css";

const PostHeader: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div>
          <img src="src/assets/profile-icon.jpeg" className={styles.profileIcon} />
        </div>
        <div>
          <ul className={styles.postMeta}>
            <li className={styles.postProfileName}>usaswimming</li>
            <li className={styles.postTimeStamp}>1 hr</li>
          </ul>
          <p className={styles.postLocation}>Indiana University Nataorium</p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default PostHeader;
