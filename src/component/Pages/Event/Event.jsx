import React, { useEffect, useState } from "react";
import "./Event.css";
import { Button, responsiveFontSizes } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ColorButton } from "../Config/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BackendUrl } from "../api/api";
import { ArrowRightAlt } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
function Event() {
  const [Data, setDataEvent] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  const getDataProject = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/Visits/`);
      if (response) {
        console.log(response.data);
        setDataEvent(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataProject();
  }, []);
  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);
  return (
    <section id="Event" className="more-services">
      <div className="container">
        <div className="section-title mb-3">
          <div className="d-flex justify-content-center mb-3 ">
            <h2>
              <a href="#" className="mb-3">
                {" "}
                {t("Event.visits")}
              </a>
            </h2>
          </div>
        </div>
        <div className="row mb-4 mt-3">
          {Data.length > 0 ? (
            Data.map((item) => (
              <div
                className="col-md-6 d-flex align-items-stretch gap-4 mt-2 mb-3 "
                key={item?.id}
              >
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">
                        {" "}
                        {direction === "ar" ? item.name_ar : item.name}
                      </a>
                    </h5>
                    <p className="card-text" dir={direction === "ar" ? "rtl" : ""} >
                      {direction === "ar"
                        ? item.description_ar
                        : item.description}
                    </p>
                    <div className="read-more">
                      <Link to={`/EventDetails/${item.id}`}>
                        {direction === "ar" ? "قرأة المزيد" : "Read more"}
                        <ArrowRightAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              {/* <p>no data found data</p> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Event;
