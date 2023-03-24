import "./style.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../../assets/profile.png";
import {Link} from "react-scroll";

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
        </h2>
      </div>
      <nav ref={navRef}>
        <Link to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500} title="Sobre">
          Sobre
        </Link>
        <Link to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500} title="Projetos">
          Projetos
        </Link>
        <Link href="" title="Tecnologias">
          Tecnologias
        </Link>
        <Link href="" title="Contato">
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
