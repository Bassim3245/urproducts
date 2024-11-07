import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import About from "../About/About";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  return (
    <section id="hero" className="" >
      <video autoPlay muted loop id="myVideo">
        <source src="video/video.mp4" type="video/mp4" />
      </video>
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <center
            data-aos="fade-right"
            className=" d-flex flex-column justify-content-center align-item-center"
          >
            <h1 style={{color:"transparent", userSelect: "none"}}>{t("Home.title")} </h1>
            <h1 style={{color:"transparent", userSelect: "none"}}>{t("Home.title")} </h1>
            <About/>
            
            {/* <h5 style={{color:"white",width:"",margin:"auto",paddingTop:"10px" }}>{t("Home.subTitle")}</h5> */}
            {/* <div className=" dispalyButtonHomPAGE d-flex justify-content-center"> */}
              {/* <a href="#about" className="btn-get-started scrollto">
                {t("Home.GetStarted")}
              </a> */}
              {/* <a href="#Project" className="btn-get-started scrollto">
                {t("Home.OurProject")}
              </a> */}
            {/* </div> */}
          </center>
          <div
            data-aos="fade-left"
            className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos-delay={150}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
