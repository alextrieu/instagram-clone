import React from "react";
import styles from "../Sidebar.module.css";

import { User } from "../../../types/PostTypes";

type UserDetailsProps = {
  currentUser: User;
};

const UserDetails: React.FC<UserDetailsProps> = ({ currentUser }) => {
  return (
    <div className={styles.userDetailsContainer}>
      <div className={styles.userDetails}>
        <button className={styles.highlightBtn}>
          <img src={currentUser.profilePic}></img>
        </button>
        <div className={styles.userName}>
          <a href="#">{currentUser.username}</a>
          <p>{currentUser.name}</p>
        </div>
      </div>

      <a href="#">Switch</a>
    </div>
  );
};

export default UserDetails;
