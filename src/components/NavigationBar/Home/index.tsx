import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Home: React.FC = () => {
  return (
    <div>
      <a href="#" className={classNames(styles.link, styles.linkActive)}>
        <i className={classNames(styles.icon, "fa-solid", "fa-house")}></i>
        <span className={styles.fullText}>Home</span>
      </a>
    </div>
  );
};

export default Home;
