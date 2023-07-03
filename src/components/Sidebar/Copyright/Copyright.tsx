import React from "react";
import styles from "../Sidebar.module.css";

const Copyright: React.FC = () => {
  return (
    <div className={styles.copyrightContainer}>
      <p>
        This website is a practice project for web development purposes. It is not affiliated with, maintained,
        authorized, endorsed or sponsored by Instagram, Meta or any of its affiliates.
      </p>
    </div>
  );
};

export default Copyright;
