import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../../assets/profile.png";

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <div className="photoBox">
        <img className="photo" title="João" src={profile} alt="João" />
        <h2 className="name">
          João
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
        </div>
        </h2>
      </div>
      <nav ref={navRef}>
        <a href="" title="Sobre">
          Sobre
        </a>
        <a href="" title="Projetos">
          Projetos
        </a>
        <a href="" title="Tecnologias">
          Tecnologias
        </a>
        <a href="" title="Contato">
          Contato
        </a>
        <button className="openBtn closeBtn" onClick={showNavbar}>
          <FaTimes size={20} />
        </button>
      </nav>

      <button className="openBtn" onClick={showNavbar}>
        <FaBars size={20} />
      </button>
    </header>
  );
};

export default NavBar;
