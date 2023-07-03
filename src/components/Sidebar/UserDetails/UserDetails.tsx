import React from "react";
import styles from "../Sidebar.module.css";

const UserDetails: React.FC = () => {
  return (
    <div className={styles.userDetailsContainer}>
      <div className={styles.userDetails}>
        <button className={styles.highlightBtn}>
          <img src="/assets/profile-icon.jpeg"></img>
        </button>
        <div className={styles.userName}>
          <a href="#">usaswimming</a>
          <p>Usa Swimming</p>
        </div>
      </div>

      <a href="#">Switch</a>
    </div>
  );
};

export default UserDetails;
