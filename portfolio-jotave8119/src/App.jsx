import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact/>
    </>
  );
};

export default App;
