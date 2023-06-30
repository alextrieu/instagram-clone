import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Profile: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-user")}></i>
        <span className={styles.fullText}>User</span>
      </a>
    </div>
  );
};

export default Profile;
