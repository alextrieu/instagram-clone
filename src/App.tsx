import NavigationBar from "./components/NavigationBar/NavigationBar";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import generatePostData from "./data/MockData";
import { generateCurrentUser } from "./data/MockData";
import { Post } from "./types/PostTypes";
import "./styles/App.css";

function usePosts(count: number): Post[] {
  const posts = Array(count).fill(null).map(generatePostData);
  return posts;
}

function App() {
  const posts = usePosts(10);
  const currentUser = generateCurrentUser();
  return (
    <main className="app-container">
      <NavigationBar />
      <Feed data={posts} />
      <Sidebar currentUser={currentUser} />
    </main>
  );
}

export default App;
