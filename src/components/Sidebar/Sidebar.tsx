import React from "react";
import styles from "./Sidebar.module.css";

import UserDetails from "./UserDetails/UserDetails";
import Suggestions from "./Suggestions/Suggestions";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <UserDetails />
      <Suggestions />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Sidebar;
