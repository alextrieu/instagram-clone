import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Notifications: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-heart")}></i>
        <span className={styles.fullText}>Notifications</span>
      </a>
    </div>
  );
};

export default Notifications;
