import "./style.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="contactBox" id="contact">
      <h2 className="contactTitle">Contato</h2>
      <div className="socialBox">
        <a
          className="linkedinLink"
          href="https://www.linkedin.com/in/joaoteixeira13/"
          title="Linkedln"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn size={60} className="linkedin" /> Este é o meu Linkedln.
          Vamos nos conectar.
        </a>
        <a
          className="githubLink"
          href="https://github.com/jotave8119"
          title="GitHub"
          rel="noreferrer noopener"
        >
          <BsGithub size={70} className="github" /> Aqui é o meu GitHub. Você
          pode ver alguns dos meus projetos e contribuições. Não deixe de me
          seguir.
        </a>
        <a
          className="gmailLink"
          href="mailto:teixeirajoaovitor0@gamil.com?subject=Vim pelo portfólio"
          title="Email"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SiGmail size={60} className="gmail" /> Você também pode fazer contato
          através do meu E-mail. Fique a Vontade!
        </a>
      </div>
    </section>
  );
};

export default Contact;
