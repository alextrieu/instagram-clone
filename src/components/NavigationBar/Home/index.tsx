import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Home: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-house")}></i>
        <span className={styles.fullText}>Home</span>
      </a>
    </div>
  );
};

export default Home;
