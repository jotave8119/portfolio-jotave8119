import "./style.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../../assets/profile.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <div className="photoBox">
        <img className="photo" title="João" src={profile} alt="João" />
        <h2 className="name">João</h2>
      </div>
      <nav ref={navRef}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          onClick={showNavbar}
          title="Sobre"
        >
          Sobre
        </Link>
        <Link
          to="projects"
          onClick={showNavbar}
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          title="Projetos"
        >
          Projetos
        </Link>
        <Link
          to="techs"
          onClick={showNavbar}
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          title="Tecnologias"
        >
          Tecnologias
        </Link>
        <Link
          to="contact"
          onClick={showNavbar}
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          title="Contato"
        >
          Contato
        </Link>
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
