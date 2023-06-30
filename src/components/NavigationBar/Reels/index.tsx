import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Reels: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-film")}></i>
        <span className={styles.fullText}>Reels</span>
      </a>
    </div>
  );
};

export default Reels;
