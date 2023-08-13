import styles from "./HighlightModal.module.css";

type User = {
  profilePic: string;
  username: string;
};
type HeaderProps = {
  user: User;
  handlePausePlay: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isPaused: boolean;
};

const Header: React.FC<HeaderProps> = ({ user, handlePausePlay, isPaused }) => (
  <header className={styles.modalHeader}>
    <div className={styles.userDetails}>
      <img src={user.profilePic} alt="User Profile" />
      <p className={styles.storyUserName}>{user.username}</p>
      <p className={styles.timeStamp}>4 hr</p>
    </div>
    <div className={styles.modalControls} onClick={handlePausePlay}>
      {isPaused ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
      <i className="fa-solid fa-volume-xmark"></i>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  </header>
);

export default Header;
