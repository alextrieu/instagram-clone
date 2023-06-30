import React from "react";
import styles from "../Sidebar.module.css";

const UserDetails: React.FC = () => {
  return (
    <div className={styles.userDetailsContainer}>
      <div className={styles.userDetails}>
        <img src="src/assets/profile-icon.jpeg"></img>
        <div className={styles.userName}>
          <span>usaswimming</span>
          <p>Usa Swimming</p>
        </div>
      </div>

      <a href="#">Switch</a>
    </div>
  );
};

export default UserDetails;
