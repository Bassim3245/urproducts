import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackendUrl } from "../api/api";
import { useTranslation } from "react-i18next";
import "./Project.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import AllJobTableSole from "../ExcutedWork/AllJobTableSole";

function Project() {
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null); // Reference to the scrollable container

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Projects/`);
        setDataProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const openProjectDetails = (id) => {
    navigate(`/project/ProjectDetails/${id}`);
  };

  const { t } = useTranslation();
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="Project" id="Project">
      <div className="section-title ">
        <div className="d-flex justify-content-center mb-3">
          <h2>
            <a href="#" className="mb-3">
              {t("project.title")}
            </a>
          </h2>
        </div>
      </div>

      <div className="carousel-container" style={{marginBottom: '0'}}>
        <button className="arrow left" onClick={scrollLeft}>
          <ArrowBackIosNewIcon />
        </button>
        <div className="scroll-container" ref={scrollRef}>
          {dataProject.length > 0 ? (
            dataProject.map((item, index) => (
              <div className="custom-card" key={item.id}>
                <img
                  className="custom-card-image"
                  src={
                    item.image ||
                    "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                  }
                  alt={direction === "ar" ? item.name_ar : item.name}
                />
                <div
                  className="custom-card-content"
                  style={{ padding: "1rem" }}
                >
                  <h5 className="custom-card-title">
                    {direction === "ar" ? item.name_ar : item.name}
                  </h5>
                  {/* <button className="Readmorebutton">
                    <span>Continue</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 74 74"
                      height="34"
                      width="34"
                    >
                      <circle
                        stroke-width="3"
                        stroke="black"
                        r="35.5"
                        cy="37"
                        cx="37"
                      ></circle>
                      <path
                        fill="black"
                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      ></path>
                    </svg>
                  </button> */}
                  <Button 
                    style={{ position: 'absolute', bottom: '5px', width: '91%',background: '#4a90e2' , color: 'white' }}  
                    onClick={() => openProjectDetails(item.id)}>
                    {t("About.btnRedMore")}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <AllJobTableSole/>
    </div>
  );
 
}


export default Project;