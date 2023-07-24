import styles from "./HighlightModal.module.css";
import { User } from "../../../../types/PostTypes";

type FooterProps = {
  user: User;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputClicked: boolean;
  handleInputClicked: () => void;
};

const Footer: React.FC<FooterProps> = ({ user, inputValue, setInputValue, inputClicked, handleInputClicked }) => (
  <footer className={styles.modalFooter}>
    <input
      type="text"
      placeholder={`Reply to ${user.username}...`}
      onClick={handleInputClicked}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
    {!inputClicked && inputValue.length === 0 && (
      <>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-paper-plane"></i>
      </>
    )}
    {inputValue.length !== 0 && <button className={styles.highlightCommentBtn}>Send</button>}
  </footer>
);

export default Footer;
