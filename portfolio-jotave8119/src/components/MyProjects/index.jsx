import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import screendevducks from "../../assets/screendevducks.png";
import screendevhelp from "../../assets/screendevhelp.png";
import screenkenziehub from "../../assets/screenkenziehub.png";
import screenburguer from "../../assets/screenburguer.png";
import screennukenzie from "../../assets/screennukenzie.png";
import screenweather from "../../assets/screenweather.png";

const MyProjects = () => {
  return (
    <>
      <h2 className="proTitle" id="projects">
        Projetos
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#35baf8",
          "--swiper-pagination-color": "#35baf8",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href="https://devducksjv.vercel.app/"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screendevducks}
              alt="devducks"
              loading="lazy"
              title="Ver devducks"
            />
            <span class="desc">
              <strong>Projeto Devducks</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://grupo3-front-end-m3.vercel.app/home"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screendevhelp}
              alt="devhelp"
              loading="lazy"
              title="Ver devhelp"
            />
             <span class="desc">
              <strong>Projeto DevHelp</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://kezie-hub-kohl.vercel.app/"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screenkenziehub}
              alt="kenzieHub"
              loading="lazy"
              title="Ver KenizeHub"
            />
             <span class="desc">
              <strong>Projeto KenzieHub</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://hamburgueria-opal-pi.vercel.app/"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screenburguer}
              alt="KenzieBurguer"
              loading="lazy"
              title="Ver KenzieBurguer"
            />
             <span class="desc">
              <strong>Projeto KenzieBurger</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://nukenzie-s130.vercel.app/"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screennukenzie}
              alt="NuKenzie"
              loading="lazy"
              title=" Ver NuKenzie"
            />
             <span class="desc">
              <strong>Projeto NuKenzie</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://jotave8119.github.io/project-weather/"
            target="_blank"
            title="Ver projeto"
            rel="noreferrer noopener"
          >
            <img
              src={screenweather}
              alt="weatherApp"
              loading="lazy"
              title=" Ver WeatherApp"
            />
             <span class="desc">
              <strong>Projeto ClimaApp</strong>
              Clique na Imagem para ver o Projeto!
            </span>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyProjects;
