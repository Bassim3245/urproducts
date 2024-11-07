import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import FutureCard from "./FutureCard";
import { Link } from "react-router-dom";




const FutureDetails = () => {
    const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);

    return (
        <Container>
            <div className="section-title ">
          <div className="d-flex justify-content-center  ">
            <h2>
              <a href="#" className="">
                {" "}
                {t("Event.title")}
              </a>
            </h2>
          </div>
        </div>
            <div className="future-card-display">
                <Link to="/visits/" style={{ textDecoration: "none" }} ><FutureCard title="زيارات"  imageUrl="/image/cctv-surveillance-camera-7267551_1280.jpg"/></Link>
                <Link to="/exhibits/" style={{ textDecoration: "none" }} ><FutureCard title="المعارض"  imageUrl="/image/cctv-surveillance-camera-7267551_1280.jpg"/>   </Link>
                <Link to="/Training/" style={{ textDecoration: "none" }} ><FutureCard title="الورش"  imageUrl="/image/cctv-surveillance-camera-7267551_1280.jpg"/>   </Link>
            

            </div>
             
        </Container>
    );
};

export default FutureDetails;
