import React, { useEffect, useState } from "react";
import "./Product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
function Product() {
  const Navigate = useNavigate();
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/Categories/`);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  const handelRoute = (url) => {
    Navigate(`/ProductList/${url}`);
  };
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (event) => {
    const { offsetX, offsetY, currentTarget } = event;
    const { clientWidth, clientHeight } = currentTarget;
    setX(offsetX / clientWidth);
    setY(offsetY / clientHeight);
  };
  const { t } = useTranslation();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    setDirection(localStorage.getItem("language"));
  }, [t, useTranslation]);
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title mb-3">
          <div className="d-flex justify-content-center mb-3 ">
            <h2>
              <a href="#" className="mb-3">
                {" "}
                {t("Product.title")}
              </a>
            </h2>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          {Data.map((items) => (
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              key={items.id}
            >
              <div className="portfolio-wrap">
                <img
                  src={items?.image_c}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {direction === "ar" ? (
                    <h4>{items.name_ar}</h4>
                  ) : (
                    <h4> {items.name_en}</h4>
                  )}
                  {direction === "ar" ? (
                    <p>{items.name_ar}</p>
                  ) : (
                    <p>{items.name_en}</p>
                  )}
                  <div className="portfolio-links">
                    <a
                      src="/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <Link to={`ProductList/${items?.id}`} title="More Details">
                      <FontAwesomeIcon icon={faLink} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
// <>
{
  /* <div className="Project" id="Project">
        <div className="d-flex justify-content-center mb-3 ">
          <h2>
            <a href="#" className="mb-3">
              {" "}
              Our Products
            </a>
          </h2>
        </div>
        <div className="container">
          {Data?.map((item, index) => (
            <div className="" data-aos="zoom-in" key={index}>
              <div
                className="card"
                style={{ "--x": x, "--y": y }}
                onMouseMove={handleMouseMove}
              >
                  {" "}
                  <img src="/8.jpg" />
                <Button
                  aria-label="product"
                  className=""
                  onClick={() => handelRoute(item.id)}
                >
                  {item.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> */
}
