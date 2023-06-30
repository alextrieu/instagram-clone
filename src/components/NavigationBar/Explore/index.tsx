import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Explore: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-location-crosshairs")}></i>
        <span className={styles.fullText}>Explore</span>
      </a>
    </div>
  );
};

export default Explore;
