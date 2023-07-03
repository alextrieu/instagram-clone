import React from "react";
import styles from "../Sidebar.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Press</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Language</a>
        </li>
        <li>
          <a href="#">Meta Verified</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
