import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardSolution from "./CardSolution";
import AOS from "aos";
import "aos/dist/aos.css";
import "./solution.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate للتنقل


function Solution() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate(); // تهيئة أداة التنقل

  const handleButtonClick = () => {
    navigate("/AllSolution"); // التنقل إلى صفحة أخرى
  };

  return (
    <div>
      <section id="solution">
        <div className="container" data-aos="fade-up">
          <div className="section-title mb-2">
            <div className="d-flex justify-content-center mb-3 ">
              <h2>
                <a href="#" className="mb-2">
                  {" "}
                  {t("Oursolution.title")}
                </a>
              </h2>
            </div>
          </div>

          <div className="card-container ">
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            <CardSolution  />
            
            
            
          </div>

          <div className="center-button">
            <Button variant="contained"  onClick={handleButtonClick}>See More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solution;
