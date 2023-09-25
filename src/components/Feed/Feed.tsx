import React, { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { Post } from "../../types/PostTypes";

import PostContainer from "./PostContainer/PostContainer";
import HighlightModal from "./Highlights/HighlightModal/HighlightModal";
import HighlightCover from "./Highlights/HighlightCover/HighlightCover";
import HighlightTitle from "./Highlights/HighlightTitle/HighlightTitle";

type FeedProps = {
  data: Post[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
  const [storiesData, setStoriesData] = useState<Post[]>(data);
  const [currentStory, setCurrentStory] = useState<Post | null>(null);
  const [hasNavigatedThroughEntirety, setHasNavigatedThroughEntirety] = useState(false);
  const [timerId, setTimerId] = useState<number | null>(null);
  const [prevStories, setPrevStories] = useState<Post[] | null>(null);
  const [nextStories, setNextStories] = useState<Post[] | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      navigateImage("RIGHT");
    }, 4000);
    setTimerId(id);

    return () => clearTimeout(id);
  }, [currentStory?.currentSegment]);

  const openStory = (story: Post) => {
    const storyIndex = storiesData.findIndex((s) => s.id === story.id);
    console.log(storyIndex);

    const prevStories = storiesData.slice(Math.max(storyIndex - 2, 0), storyIndex);
    // console.log(prevStories);
    const nextStories = storiesData.slice(storyIndex + 1, storyIndex + 3);

    setPrevStories(prevStories);
    setNextStories(nextStories);

    setCurrentStory(story);
    setHasNavigatedThroughEntirety(false);
  };

  useEffect(() => {
    if (currentStory) {
      const updatedStoryIndex = storiesData.findIndex((s) => s.id === currentStory.id);
      console.log(updatedStoryIndex);
      const prevStories = storiesData.slice(Math.max(updatedStoryIndex - 2, 0), updatedStoryIndex);
      console.log(prevStories);

      const nextStories = storiesData.slice(updatedStoryIndex + 1, updatedStoryIndex + 3);

      setPrevStories(prevStories);
      setNextStories(nextStories);
    }
  }, [currentStory]);

  const navigateImage = (direction: "LEFT" | "RIGHT") => {
    if (!currentStory || !currentStory.user.storyImages) return; // Check if storyImages is available

    if (timerId) {
      clearTimeout(timerId);
    }
    // Access the current index of the image
    const currentIndex = currentStory.currentSegment;
    // Using the currentIndex, calculate the value of the nextSegment
    const nextSegment = direction === "LEFT" ? currentIndex - 1 : currentIndex + 1;

    // If the nextSegment is greater or equal to 0 AND less than the length of the content array, then use the value of nextSegment to
    // update the currentSegment property of the currentStory and display the next slide
    if (nextSegment >= 0 && nextSegment < currentStory.user.storyImages.length) {
      setCurrentStory({
        ...currentStory,
        currentSegment: nextSegment,
      });
      // Otherwise, display the previous or next story
    } else {
      direction === "LEFT" ? moveToPreviousStory() : moveToNextStory();
    }

    // Check to see if user has viewed all the stories
    if (!hasNavigatedThroughEntirety && currentStory) {
      if (direction === "RIGHT" && nextSegment === currentStory.user.storyImages.length - 1) {
        setHasNavigatedThroughEntirety(true);
      } else if (
        direction === "LEFT" &&
        currentIndex === currentStory.user.storyImages.length - 1 &&
        nextSegment === currentStory.user.storyImages.length - 2
      ) {
        setHasNavigatedThroughEntirety(true);
      }
    }
  };

  // useEffect(() => {
  //   setHasNavigatedThroughEntirety(false);
  // }, [currentStory]);

  const moveToPreviousStory = () => {
    if (hasNavigatedThroughEntirety) {
      markStoryAsViewed();
    }

    const currentStoryIndex = storiesData.findIndex((story) => story.id === currentStory?.id);
    const hasPreviousStory = currentStoryIndex > 0;

    if (hasPreviousStory) {
      const previousStory = storiesData[currentStoryIndex - 1];
      if (previousStory.user.storyImages) {
        setCurrentStory({
          ...previousStory,
          currentSegment: previousStory.user.storyImages.length - 1,
        });
      }
    } else {
      closeModal();
    }

    setHasNavigatedThroughEntirety(false);
  };

  const moveToNextStory = () => {
    if (hasNavigatedThroughEntirety) {
      markStoryAsViewed();
    }
    // Determine the index of the current story by iterating through the original array and cross referencing its user id
    const currentStoryIndex = storiesData.findIndex((story) => story.id === currentStory?.id);
    // If the current story index is less than the length of the array then it means its not the last object
    const hasNextStory = currentStoryIndex < storiesData.length - 1;

    // If the condition is true, create a variable that holds the value of the next story and assign it to the setter function
    if (hasNextStory) {
      const nextStory = storiesData[currentStoryIndex + 1];
      setCurrentStory(nextStory);
    } else {
      closeModal();
    }

    setHasNavigatedThroughEntirety(false);
  };

  const markStoryAsViewed = () => {
    if (!currentStory) {
      return;
    }

    const updatedStory = {
      ...currentStory,
      viewed: true,
    };

    const updatedStories = storiesData.map((story) => (story.id === currentStory?.id ? updatedStory : story));

    setStoriesData(updatedStories);
    setCurrentStory(updatedStory);
  };

  const closeModal = () => {
    if (!currentStory || !currentStory.user.storyImages) return; // Check if storyImages is available

    if (currentStory) {
      const currentIndex = currentStory.currentSegment;

      if (currentIndex === currentStory.user.storyImages.length - 1 || hasNavigatedThroughEntirety) {
        markStoryAsViewed();
      }
    }

    setCurrentStory(null);
    setHasNavigatedThroughEntirety(false); // Reset for the next story
  };

  return (
    <div className={styles.feed}>
      <div className={styles.highlightFeed}>
        {storiesData.slice(0, 8).map((story) => (
          <div className={styles.highlightWrapper} key={story.id}>
            <header className={styles.highlightContainer}>
              <button className={styles.highlightBtn}>
                <div
                  className={story.viewed ? styles.noGradientBorder : styles.gradientBorder}
                  onClick={() => openStory(story)}
                >
                  <HighlightCover data={story} />
                </div>
                <HighlightTitle data={story} />
              </button>
            </header>
          </div>
        ))}
        {currentStory && currentStory.user.storyImages && (
          <HighlightModal
            // setCurrentStory={setCurrentStory}
            currentStory={currentStory}
            navigateImage={navigateImage}
            closeModal={closeModal}
            timerId={timerId}
            setTimerId={setTimerId}
            prevStories={prevStories}
            nextStories={nextStories}
          />
        )}
      </div>

      <ul className={styles.postList}>
        {data.map((post, index) => (
          <li key={index} className={styles.postListItem}>
            <PostContainer data={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
