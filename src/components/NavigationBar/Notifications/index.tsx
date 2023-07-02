import styles from "../NavigationBar.module.css";
import classNames from "classnames";
import GeneralNotificationIcon from "./GeneralNotificationIcon";

const Notifications: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-heart")}>
          <GeneralNotificationIcon hasNotification={true} />
        </i>
        <span className={styles.fullText}>Notifications</span>
      </a>
    </div>
  );
};

export default Notifications;
