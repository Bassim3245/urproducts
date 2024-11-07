import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./solution.css";
import Card from "./CardSolution";
import { BackendUrl } from "../api/api";
import axios from "axios";

function AllSolution() {
  const [cards, setCards] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Solution/`);
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section id="solution">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <div className="d-flex justify-content-center mb-3">
              <h2>
                <a href="#" className="mb-3">
                  {t("Oursolution.title")}
                </a>
              </h2>
            </div>
          </div>

          {/* Two rows, three columns grid */}
          <div className="container-sole">
            {cards.slice(0, 6).map((card, index) => (
              <Card
                key={index}
                image={card.image}
                name={i18n.language === "ar" ? card.name_ar : card.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllSolution;