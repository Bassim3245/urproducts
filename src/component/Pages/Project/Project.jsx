import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ColorButton } from "../Config/contact";
import { BackendUrl } from "../api/api";
import "../Style/Style.css";
import { useTranslation } from "react-i18next";

function Project() {
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleViewAllProjects = () => {
    navigate("/ViewAllProject");
  };

  const openProjectDetails = (id) => {
    navigate(`/project/ProjectDetails/${id}`);
  };

  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);
  return (
    <div>
      <div className="Project" id="Project">
        <div className="section-title mb-3">
          <div className="d-flex justify-content-center mb-3">
            <h2>
              <a href="#" className="mb-3">
                {t("project.title")}
              </a>
            </h2>
          </div>
        </div>
        <div className="container" dir={direction === "ar" ? "rtl" : ""}>
          {dataProject.length > 0 ? (
            dataProject.slice(0, 4).map((item) => (
              <div className="box" data-aos="zoom-in" key={item.id}>
                <Button
                  onClick={() => openProjectDetails(item.id)}
                  variant="text"
                  color="secondary"
                  startIcon={
                    direction === "ar" ? (
                      <ArrowForwardIosIcon fontSize="medium" />
                    ) : null
                  }
                  endIcon={
                    direction !== "ar" ? (
                      <ArrowForwardIosIcon fontSize="medium" />
                    ) : null
                  }
                  sx={{ fontSize: "20px" }}
                >
                  {direction === "ar" ? item.name_ar : item.name}
                </Button>
                <div
                  className="overflow-hidden "
                  dir={direction === "ar" ? "rtl" : ""}
                >
                  {direction === "ar" ? (
                    <p>{item.description_ar}</p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
                <div>
                  <ColorButton onClick={() => openProjectDetails(item.id)}>
                    Read more
                  </ColorButton>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div className="d-flex justify-content-center container mt-5">
          {dataProject.length >=4 && (
            <Button variant="contained" onClick={handleViewAllProjects}>
              View all
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
