import "./App.css";
import About from "./components/About";
import MyBanner from "./components/MyBanner";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <MyBanner />
      <About />
      <MyProjects/>
    </>
  );
};

export default App;
