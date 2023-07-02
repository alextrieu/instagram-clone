import styles from "../NavigationBar.module.css";
import classNames from "classnames";
import MessageNotificationIcon from "./MessageNotificationIcon";

const Messages: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-message", "fa-messageIcon")}>
          <MessageNotificationIcon hasNotification={true} />
        </i>
        <span className={styles.fullText}>Messages</span>
      </a>
    </div>
  );
};

export default Messages;
