import React, { useState, useEffect } from "react";
import styles from "./NavigationBar.module.css";
import Home from "./Home";
import Search from "./Search";
import Explore from "./Explore";
import Reels from "./Reels";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Create from "./Create";
import Profile from "./Profile";
import MoreOptions from "./MoreOptions";

const NavigationBar: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState("/assets/Instagram-Wordmark-White-Logo.wine.png");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1145) {
        setLogoSrc("/assets/white-ig-log.png");
      } else {
        setLogoSrc("/assets/Instagram-Wordmark-White-Logo.wine.png");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.navigation}>
      <div className={styles.navigationLinks}>
        <div className={styles.logo}>
          <img src={logoSrc} className={styles.mainLogo}></img>
        </div>
        <Home />
        <Search />
        <Explore />
        <Reels />
        <Messages />
        <Notifications />
        <Create />
        <Profile />
      </div>
      <MoreOptions />
    </div>
  );
};

export default NavigationBar;
