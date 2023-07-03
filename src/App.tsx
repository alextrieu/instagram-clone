import NavigationBar from "./components/NavigationBar/NavigationBar";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <main className="app-container">
      <NavigationBar />
      <Feed />
      <Sidebar />
    </main>
  );
}

export default App;
