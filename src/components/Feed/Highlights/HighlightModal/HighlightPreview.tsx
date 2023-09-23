// import styles from "./HighlightModal.module.css";

// import { Post } from "../../../../types/PostTypes";

// type HighlightPreviewProps = {
//   leftNeighbor1?: Post;
//   leftNeighbor2?: Post;
//   rightNeighbor1?: Post;
//   rightNeighbor2?: Post;
//   handlePreviewClick: (index: number) => void;
//   activeHighlightIndex: number;
// };

// export default function HighlightPreview({
//   leftNeighbor1,
//   leftNeighbor2,
//   rightNeighbor1,
//   rightNeighbor2,
//   handlePreviewClick,
//   activeHighlightIndex,
// }: HighlightPreviewProps) {
//   return (
//     <div className={styles.preview}>
//       {/* Render left neighbors */}
//       {leftNeighbor1 && (
//         <div
//           className={styles.previewOne}
//           style={{ backgroundImage: `url(${leftNeighbor1.user.storyImages[0]})` }}
//           onClick={() => handlePreviewClick(activeHighlightIndex - 2)}
//         >
//           <div className={styles.borderedImage}>
//             <img src={leftNeighbor1.user.profilePic} className={styles.previewUserPic} />
//           </div>
//           <p className={styles.previewUser}>{leftNeighbor1.user.username}</p>
//           <p>12h</p>
//         </div>
//       )}
//       {leftNeighbor2 && (
//         <div
//           className={styles.previewTwo}
//           style={{ backgroundImage: `url(${leftNeighbor2.user.storyImages[0]})` }}
//           onClick={() => handlePreviewClick(activeHighlightIndex - 1)}
//         >
//           <div className={styles.borderedImage}>
//             <img src={leftNeighbor2.user.profilePic} className={styles.previewUserPic} />
//           </div>
//           <p className={styles.previewUser}>{leftNeighbor2.user.username}</p>
//           <p>13h</p>
//         </div>
//       )}

//       {/* Render right neighbors */}
//       {rightNeighbor1 && (
//         <div
//           className={styles.previewOne}
//           style={{ backgroundImage: `url(${rightNeighbor1.user.storyImages[0]})` }}
//           onClick={() => handlePreviewClick(activeHighlightIndex + 1)}
//         >
//           <div className={styles.borderedImage}>
//             <img src={rightNeighbor1.user.profilePic} className={styles.previewUserPic} />
//           </div>
//           <p className={styles.previewUser}>{rightNeighbor1.user.username}</p>
//           <p>12h</p>
//         </div>
//       )}
//       {rightNeighbor2 && (
//         <div
//           className={styles.previewTwo}
//           style={{ backgroundImage: `url(${rightNeighbor2.user.storyImages[0]})` }}
//           onClick={() => handlePreviewClick(activeHighlightIndex + 2)}
//         >
//           <div className={styles.borderedImage}>
//             <img src={rightNeighbor2.user.profilePic} className={styles.previewUserPic} />
//           </div>
//           <p className={styles.previewUser}>{rightNeighbor2.user.username}</p>
//           <p>13h</p>
//         </div>
//       )}
//     </div>
//   );
// }
