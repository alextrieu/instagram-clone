import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import generatePostData, { Post } from "./data/MockData";
import "./styles/App.css";

function usePosts(count: number): Post[] {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const newPosts = Array(count).fill(null).map(generatePostData);
    setPosts(newPosts);
  }, [count]);

  return posts;
}

function App() {
  const posts = usePosts(10);
  return (
    <main className="app-container">
      <NavigationBar />
      <Feed postsData={posts} />
      <Sidebar />
    </main>
  );
}

export default App;
