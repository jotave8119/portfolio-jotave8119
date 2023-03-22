import "./App.css";
import About from "./components/About";
import MyBanner from "./components/MyBanner";
import NavBar from "./components/NavBar";

// import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'

const App = () => {
  return (
    <>
      <NavBar />
      <MyBanner />
      <About />
    </>
  );
};

export default App;
