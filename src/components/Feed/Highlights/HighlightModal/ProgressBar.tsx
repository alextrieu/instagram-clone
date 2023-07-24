import styles from "./HighlightModal.module.css";

type ProgressBarProps = {
  storyImages: string[];
  currentImageIndex: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ storyImages, currentImageIndex }) => {
  return (
    <div className={styles.progressContainer}>
      {storyImages &&
        storyImages.map((_, index) => (
          <div
            key={index}
            className={styles.progressBar}
            style={{
              backgroundColor: index < currentImageIndex ? "white" : index === currentImageIndex ? "white" : "gray",
            }}
          ></div>
        ))}
    </div>
  );
};

export default ProgressBar;
