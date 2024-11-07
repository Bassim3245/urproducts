import "../Product.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BackendUrl } from "../../api/api";

export default function ProductDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      try {
        setLoading(true);
        const response = await axios.get(`${BackendUrl}/products/${id}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section id="portfolio-details" className="portfolio-details">
      {loading ? (
        <div className="displayLoading">
          <div className="preloader">loading...</div>
        </div>
      ) : (
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  {data.image && (
                    <div className="swiper-slide">
                      <img
                        src={data.image}
                        alt={data.title || "Product Image"}
                      />
                    </div>
                  )}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
              </div>
              <div className="portfolio-description">
                <p>{data.description || "No Description available."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
