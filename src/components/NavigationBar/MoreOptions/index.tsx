import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const MoreOptions: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-bars")}></i>
        <span className={styles.fullText}>More</span>
      </a>
    </div>
  );
};

export default MoreOptions;
