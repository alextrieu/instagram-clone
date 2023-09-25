import styles from "./HighlightModal.module.css";
import { User } from "../../../../types/PostTypes";
import { useState } from "react";

type FooterProps = {
  user: User;
};

const Footer: React.FC<FooterProps> = ({ user }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputClicked, setInputClicked] = useState(false);

  function handleInputClicked() {
    setInputClicked((prev) => !prev);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
    <footer className={styles.modalFooter}>
      <input
        type="text"
        placeholder={`Reply to ${user && user.username}...`}
        onClick={handleInputClicked}
        onChange={(e) => handleInputChange(e)}
        value={inputValue}
      />
      {!inputClicked && inputValue.length === 0 && (
        <>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-paper-plane"></i>
        </>
      )}
      {(inputValue.length !== 0 || inputClicked) && <button className={styles.highlightCommentBtn}>Send</button>}
    </footer>
  );
};

export default Footer;
