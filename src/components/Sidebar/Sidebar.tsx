import React from "react";
import styles from "./Sidebar.module.css";

import UserDetails from "./UserDetails/UserDetails";
import Suggestions from "./Suggestions/Suggestions";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";

import { User } from "../../types/PostTypes";

const Sidebar: React.FC = ({ currentUser }) => {
  return (
    <aside className={styles.sidebar}>
      <UserDetails currentUser={currentUser} />
      <Suggestions />
      <Footer />
      <Copyright />
    </aside>
  );
};

export default Sidebar;
