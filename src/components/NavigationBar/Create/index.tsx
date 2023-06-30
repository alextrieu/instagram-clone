import styles from "../NavigationBar.module.css";
import classNames from "classnames";

const Create: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <i className={classNames(styles.icon, "fa-solid", "fa-square-plus")}></i>
        <span className={styles.fullText}>Create</span>
      </a>
    </div>
  );
};

export default Create;
