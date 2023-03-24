import "./style.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const TechSkills = () => {
    return(
        <>
        <h2 className="techTitle" id="techs">Tecnologias</h2>
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
        className="mySwiper">
            <SwiperSlide>
                <span className="htmlIcon">
                    <FaHtml5 size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="cssIcon">
                    <FaCss3Alt size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="jsIcon">
                    <SiJavascript size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="gitIcon">
                    <FaGitAlt size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="reactIcon">
                    <RiReactjsLine size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="styIcon">
                    <SiStyledcomponents size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="axiosIcon">
                    <SiAxios size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="vercelIcon">
                    <SiVercel size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="viteIcon">
                    <SiVite size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="typeIcon">
                    <SiTypescript size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="nodeIcon">
                    <FaNodeJs size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="exIcon">
                    <SiExpress size={40}/>
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="sqlIcon">
                    <SiPostgresql size={40}/>
                </span>
            </SwiperSlide>
        </Swiper>
        </>
    );
};

export default TechSkills;