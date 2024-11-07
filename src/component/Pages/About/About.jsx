import React, { useEffect, useState } from "react";
import "./about.css";
import "./about2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// استيراد مكونات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // استيراد أنماط Swiper


function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [direction, setDirection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setDirection(localStorage.getItem("language"));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize(); // التحقق من الحجم عند التحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [t, useTranslation]);

  return (
    <section
      id="about"
      className="about section w-100"
      dir={direction === "ar" ? "rtl" : ""}
    >
      <div className="section-title mb-3">
        <div className="d-flex justify-content-center mb-3">
          <h2>
            <a href="#" className="mb-3">
              {/* {t("About.title")} */}
            </a>
          </h2>
        </div>
      </div>
      <div className="container" style={{ cursor: "pointer" }}>
        <div className="card-wrapper ">
          {isMobile ? (
            // تحويل المحتوى إلى Swiper للشاشات الصغيرة
            
            <Swiper
              spaceBetween={30} // المسافة بين الشرائح
              slidesPerView={1} // عدد الشرائح المعروضة في نفس الوقت
              pagination={{ clickable: true }} // إمكانية التصفح بين الشرائح
              navigation // أزرار التنقل
              loop={true}
              style={{marginTop:"100px"}}
            >
              <SwiperSlide>
                <div className="custom-container">
                  <div className="custom-content">
                    <div className="custom-text">
                      <h3>{t("About.subTitle")}</h3>
                      <p className="fst-italic">{t("About.text1")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="custom-container">
                  <div className="custom-content">
                    <div className="custom-text">
                      <h3>{t("About.subTitle2")}</h3>
                      <p className="fst-italic">{t("About.text2")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="custom-container">
                  <div className="custom-content">
                    <div className="custom-text">
                      <h3>{t("About.subTitle3")}</h3>
                      <p className="fst-italic">{t("About.text3")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="custom-container">
                  <div className="custom-content">
                    <div className="custom-text">
                      <h3>{t("About.subTitle4")}</h3>
                      <p className="fst-italic">{t("About.text4")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>

            
          ) : (
            // عرض مخصص للشاشة الكبيرة
            <>
              <div className="custom-container">
                <div className="custom-content">
                  <div className="custom-text">
                    <h3>{t("About.subTitle")}</h3>
                    <p className="fst-italic">{t("About.text1")}</p>
                  </div>
                </div>
              </div>
              <div className="custom-container">
                <div className="custom-content">
                  <div className="custom-text">
                    <h3>{t("About.subTitle2")}</h3>
                    <p className="fst-italic">{t("About.text2")}</p>
                  </div>
                </div>
              </div>
              <div className="custom-container">
                <div className="custom-content">
                  <div className="custom-text">
                    <h3>{t("About.subTitle3")}</h3>
                    <p className="fst-italic">{t("About.text3")}</p>
                  </div>
                </div>
              </div>
              {/* <div className="custom-container">
                <div className="custom-content">
                  <div className="custom-text">
                    <h3>{t("About.subTitle4")}</h3>
                    <p className="fst-italic">{t("About.text4")}</p>
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
