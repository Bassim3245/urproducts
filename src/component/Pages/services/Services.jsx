import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./services.css";
import { BackendUrl } from "../api/api";

function Services() {
  const { t, i18n } = useTranslation(); // Added i18n to get current language
  const [services, setServices] = useState([]);
  const [isArabic, setIsArabic] = useState(i18n.language === "ar"); // Set initial state based on current language

  const fetchServiceData = async () => {
    try {
      const response = await axios.get(`${BackendUrl}Services/`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  useEffect(() => {
    setIsArabic(i18n.language === "ar"); // Update state when language changes
  }, [i18n.language]);

  if (!services.length) {
    return <div>Loading...</div>;
  }

  return (
    <section id="services" className={`services-section ${isArabic ? 'text-right' : ''}`}>
      <div className="services-container" data-aos="fade-up">
        <div className="d-flex justify-content-center mb-3 section-title" >
          <h2 style={{marginTop:"100px"}}>
            <a href="#" className="mb-3 ">
              {" "}
              {t("Services.title")}
            </a>
          </h2>
        </div>
        <div className="services-grid-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={isArabic ? service.name_ar : service.name}
              image={service.image} // Pass the image URL from the backend
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, image }) => (
  <div className="services-card" data-aos="zoom-in">
    <div className="services-image-container">
      <img src={image} alt={title} className="services-image" /> {/* Render image from backend */}
    </div>
    <div className="services-card-content">
      <p className="services-card-title">{title}</p>
    </div>
    <div className="services-underline"></div>
  </div>
);

export default Services;
