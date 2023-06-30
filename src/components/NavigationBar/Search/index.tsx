import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Search: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-magnifying-glass")}></i>
        <span className={styles.fullText}>Search</span>
      </a>
    </div>
  );
};

export default Search;
