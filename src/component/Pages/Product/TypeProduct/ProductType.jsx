import React, { useEffect, useState } from "react";
import "../StyleProject/Product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { BackendUrl } from "../../api/api";
import axios from "axios";
import { useTranslation } from "react-i18next";
function ProductList() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id}=useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BackendUrl}/products/?category=${id}`
        );
        console.log(response.data);
        setDataProduct(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading && (
        <div className=" ">
          <div className="preloader"></div>
        </div>
      )}
      <div
        className="Product bg-eee"
        style={{ backgroundColor: "#eeee" }}
        id="Product"
      >
        <div className="d-flex justify-content-center mb-3 ">
          <h2>
            <a href="#" className="mb-3">
              {" "}
              Our Products
            </a>
          </h2>
        </div>
        <div className="container">
          {dataProduct?.map((item) => (
            <div className="box" data-aos="zoom-in" key={item.id}>
              <div className="image">
                <div className="displayLink"></div>
                <NavLink to={`/ProductDetails/${item.id}`}>
                  {" "}
                  <img
                    src={item.image} // Use item.imageSrc here, or replace it with the correct property name for the image source
                    alt={item.name} // Use item.altText here, or replace it with the correct property name for the alt text
                  />
                </NavLink>
              </div>
              <Typography className="displayNameCamera">{item.name}</Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
