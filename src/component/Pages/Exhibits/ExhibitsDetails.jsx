import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendUrl } from "../api/api";
import "../Event/Event.css"; // Keep this if you have other styles here
import { useTranslation } from "react-i18next";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function OpenProjectById() {
  const [DataProject, setDataProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Exhibits/${id}`);
        console.log(response);
        setDataProject(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData(); // Call fetchData function inside useEffect
  }, [id]); // Add id as dependency

  const { t } = useTranslation();
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);


  const imgStyle = {
    width: '60%', // Set images to 80% of the container width
    maxHeight: '500px', // Set a max height for smaller images
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
//     prevArrow: <button style={arrowStyle}>Previous</button>, 
//     nextArrow: <button style={arrowStyle}>Next</button>, 
 };


  return (
    <div className="we-help-section m-4 p-4">
      <div className="m-4 p-4">
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
            <h2 className="section-title mb-4" style={{ paddingTop :'30px' , marginTop:'10px'}}>
              {direction === "ar" ? DataProject?.name_ar : DataProject?.name}
            </h2>
            <p style={descriptionStyle}>
              {direction === "ar"
                ? DataProject?.description_ar
                : DataProject?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default OpenProjectById;







// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { BackendUrl } from "../api/api";
// import "./Exhibits.css";
// import { useTranslation } from "react-i18next";
// function ExhibitsDetails() {
//   const [Event, setEvent] = useState({});
//   const { id } = useParams();
//   const { t } = useTranslation();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${BackendUrl}/Exhibits/${id}`);
//         console.log(response);
//         setEvent(response.data);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//     console.log(Event);
//   }, []);
//   const [direction, setDirection] = useState();
//   useEffect(() => {
//     setDirection(localStorage.getItem("language"));
//   }, [t, useTranslation]);

//   return (
//     <div className="we-help-section m-4 p-4">
//       <div className="m-4 p-4">
//         <div
//           className="row justify-content-between"
//           dir={direction === "ar" ? "rtl" : ""}
//         >
//           <div className="col-lg-7 mb-5 mb-lg-0">
//             <div className="imgs-grid">
//               <div className="grid grid-1">
//                 {Event?.image && <img src={Event?.image} />}
//               </div>
//               <div className="grid grid-2">
//                 {Event?.image2 && <img src={Event?.image1} />}
//               </div>
//               <div className="grid grid-3">
//                 {Event?.image2 && <img src={Event?.image2} />}
//               </div>
//               <div className="grid grid-4">
//                 {Event?.image3 && <img src={Event?.image3} />}
//               </div>
//               <div className="grid grid-5">
//                 {Event?.image4 && <img src={Event?.image4} />}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5 ps-lg-5">
//             <h2 className="section-title mb-4">
//               {direction === "ar" ? Event?.name_ar : Event?.name}
//             </h2>
//             <p>
//               {" "}
//               {direction === "ar" ? Event?.description_ar : Event?.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExhibitsDetails;
