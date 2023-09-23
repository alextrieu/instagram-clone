// import React, { useState } from "react";
// import styles from "./Highlights.module.css";

// import HighlightCover from "./HighlightCover/HighlightCover";
// import HighlightTitle from "./HighlightTitle/HighlightTitle";
// import { Post } from "../../../types/PostTypes";
// import HighlightModal from "./HighlightModal/HighlightModal";

// const Highlights: React.FC = ({ data, allPosts }) => {
//   const [storiesData, setStoriesData] = useState(data);
//   const [currentStory, setCurrentStory] = useState<Post | null>(null);
//   const [hasNavigatedThroughEntirety, setHasNavigatedThroughEntirety] = useState(false);

//   const openStory = (story) => {
//     setCurrentStory(story);
//     setHasNavigatedThroughEntirety(false);
//   };

//   return (
//     <div className={styles.highlightWrapper}>
//       <header className={styles.highlightContainer}>
//         <button className={styles.highlightBtn}>
//           <div
//             className={storiesData.viewed ? styles.noGradientBorder : styles.gradientBorder}
//             onClick={() => openStory(storiesData)}
//           >
//             <HighlightCover data={storiesData} />
//           </div>
//           <HighlightTitle data={storiesData} />
//         </button>
//       </header>

//       {currentStory && (
//         <HighlightModal
//           setCurrentStory={setCurrentStory}
//           setStoriesData={setStoriesData}
//           currentStory={currentStory}
//           allPosts={allPosts}
//         />
//       )}
//     </div>
//   );
// };

// export default Highlights;
