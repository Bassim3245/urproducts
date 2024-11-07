import { Container, Row } from "react-bootstrap";
import CategoryCard from "./Clint";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API calls
import { BackendUrl } from "../api/api";

const HomeCategory = () => {
  const { t, i18n } = useTranslation(); // Import i18n for language management
  const [direction, setDirection] = useState("");
  const [clients, setClients] = useState([]); // State to hold clients data

  // Fetch clients data and set language direction on mount
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Clients/`);
        setClients(response.data); // Assuming response.data is an array of clients
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    // Get language direction from local storage
    const storedLanguage = localStorage.getItem("language") || "en"; // Default to English
    setDirection(storedLanguage);
    i18n.changeLanguage(storedLanguage); // Set initial language for i18n
    fetchClients(); // Call the fetch function
  }, [i18n]);

  // Update language direction on language change
  useEffect(() => {
    setDirection(i18n.language); // Update the direction based on i18n
    localStorage.setItem("language", i18n.language); // Update local storage
  }, [i18n.language]);

  return (
    <Container>
      <div className="section-title ">
        <div className="d-flex justify-content-center">
          <h2>
            <a href="#" className="">
              {t("header.OurClinents")}
            </a>
          </h2>
        </div>
      </div>
      <Row className="my-2 d-flex justify-content-between mb-4 ">
        {clients.map((client) => (
          <CategoryCard
            key={client.id} // Use a unique key for each card
            title={direction === "ar" ? client.name_ar : client.name_en} // Determine the title based on language direction
            img={client.image} // Keep the image path as is or update it accordingly
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeCategory;