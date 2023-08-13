import React from "react";
import styles from "./HighlightModal.module.css";

export default function HighlightPreview({ neighbor1, neighbor2 }) {
  // get profile pic
  //   console.log(neighbor1.user.profilePic);
  return (
    <div className={styles.preview}>
      <div className={styles.previewOne} style={{ backgroundImage: `url(${neighbor1.user.storyImages[0]})` }}>
        <div className={styles.borderedImage}>
          <img src={neighbor1.user.profilePic} className={styles.previewUserPic} />
        </div>
        <p className={styles.previewUser}>{neighbor1.user.username}</p>
        <p>12h</p>
      </div>
      <div className={styles.previewTwo} style={{ backgroundImage: `url(${neighbor2.user.storyImages[0]})` }}>
        <div className={styles.borderedImage}>
          <img src={neighbor2.user.profilePic} className={styles.previewUserPic} />
        </div>
        <p className={styles.previewUser}>{neighbor2.user.username}</p>
        <p>13h</p>
      </div>
    </div>
  );
}
