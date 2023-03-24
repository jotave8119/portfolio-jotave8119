import "./App.css";
import About from "./components/About";
import MyBanner from "./components/MyBanner";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/NavBar";
import TechSkills from "./components/TechSkills";

const App = () => {
  return (
    <>
      <NavBar />
      <MyBanner />
      <About />
      <MyProjects/>
      <TechSkills/>
    </>
  );
};

export default App;
