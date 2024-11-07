import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Event/Event.css"; // Keep this if you have other styles here
import { useTranslation } from "react-i18next";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Week() {
  const [DataProject, setDataProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Replace API call with dummy data
    const dummyData = {
      id: 1,
      name: "Project Title",
      name_ar: "عنوان المشروع",
      description: "This is a sample project description.",
      description_ar: "هذا هو وصف المشروع التجريبي.",
      image: "/image/mission.jpg",
      image1: "/image/mission.jpg",
      image2: "/image/mission.jpg",
      image3: "/image/mission.jpg",
      image4: "/image/mission.jpg",
    };

    setDataProject(dummyData); // Set the dummy data
  }, [id]); // Add id as dependency

  const { t } = useTranslation();
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);


  const imgStyle = {
    width: '100%', // Set images to 80% of the container width
    maxHeight: '450px', // Set a max height for smaller images
    objectFit: 'hidden', // Ensure images cover the area without distortion
    margin: '0 auto', // Center images in the slider
  };

  const descriptionStyle = {
    width: '70%', // Set the width of the description
    margin: '0 auto', // Center the description
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Slide change every 3 seconds (3000 ms)
};



  return (
    <div className="" style={{backgroundColor:"#ececec"}}>
         <div className="section-title ">
          <div className="d-flex justify-content-center  ">
            <h2>
              <a href="#" className="">
                {" "}
                {t("header.Week")}
              </a>
            </h2>
          </div>
        </div>
      <div className=" p-4">
        <div
          className="row justify-content-between"
          dir={direction === "ar" ? "rtl" : ""}
        >
          <div className="col-lg-12 mb-10 mb-lg-0"> {/* Full width for images */}
            {/* Slider for images */}
            <Slider {...settings}>
              {DataProject?.image && (
                <div><img src={DataProject.image} alt="Project" style={imgStyle} /></div>
              )}
              {DataProject?.image1 && (
                <div><img src={DataProject.image1} alt="Project" style={imgStyle} /></div>
              )}
              {DataProject?.image2 && (
                <div><img src={DataProject.image2} alt="Project" style={imgStyle} /></div>
              )}
              {DataProject?.image3 && (
                <div><img src={DataProject.image3} alt="Project" style={imgStyle} /></div>
              )}
              {DataProject?.image4 && (
                <div><img src={DataProject.image4} alt="Project" style={imgStyle} /></div>
              )}
            </Slider>
          </div>
          <div className="col-lg-12 ps-lg-5 mt-10 pt-10"> {/* Full width for title and description */}
            {/* Ensure title and description are below the images */}
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week;
