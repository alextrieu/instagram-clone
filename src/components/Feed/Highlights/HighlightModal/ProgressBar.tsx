import styles from "./HighlightModal.module.css";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  storyImages: string[];
  currentImageIndex: number;
  elapsedTime: number;
  isPaused: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ storyImages, currentImageIndex, elapsedTime, isPaused }) => {
  const [progressWidths, setProgressWidths] = useState<number[]>(Array(storyImages.length).fill(0));

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (!isPaused) {
      timer = setInterval(() => {
        setProgressWidths((prevWidths) => {
          const newWidths = [...prevWidths];
          if (currentImageIndex < storyImages.length) {
            newWidths[currentImageIndex] = ((elapsedTime % 4000) / 4000) * 100;
          }
          return newWidths;
        });
      }, 100);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPaused, elapsedTime, currentImageIndex]);

  useEffect(() => {
    setProgressWidths(() => {
      const newWidths = Array(storyImages.length).fill(0);
      for (let i = 0; i < currentImageIndex; i++) {
        newWidths[i] = 100;
      }
      return newWidths;
    });
  }, [storyImages.length, currentImageIndex]);

  return (
    <div className={styles.progressContainer}>
      {storyImages.map((_, index) => (
        <div
          key={index}
          className={styles.progressBar}
          style={{
            backgroundColor: "gray",
          }}
        >
          <div
            style={{
              width: `${progressWidths[index] || 0}%`,
              backgroundColor: index <= currentImageIndex ? "white" : "gray",
              height: "100%",
              transition: "width 0.2s",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
