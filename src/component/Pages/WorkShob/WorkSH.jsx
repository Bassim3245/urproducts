import "./WorkShopStyle.css";
import { useState, useRef, useEffect } from "react";
import "./WorkShopStyle.css";
import { useTranslation } from "react-i18next";
function WorkShop() {
  const [sliderItems, setSliderItems] = useState([]);
  const [thumbnailItems, setThumbnailItems] = useState([]);
  const [isNext, setIsNext] = useState(false);

  const timeRunning = 3000;
  const timeAutoNext = 6000;
  const {t}=useTranslation()
  const sliderData = [
    {
      id: 1,
      imgUrl: "slider/1.jpg",
      Company: "G.C.E.S",
      title:t("WorkShop.title1"),
    },
    {
      id: 2,
      imgUrl: "slider/2.jpg",
      Company: "G.C.E.S",
      title: t("WorkShop.title2"),
    },
    {
      id: 3,
      imgUrl: "slider/3.jpg",
      Company: "G.C.E.S",
      title: t("WorkShop.title3"),
    },
    {
      id: 4,
      imgUrl: "slider/5.jpg",
      Company: "G.C.E.S",
      title: t("WorkShop.title4"),
    },
  ];
  useEffect(() => {
    const initialSliderItems = sliderData.map((item) => ({ ...item }));
    setSliderItems(initialSliderItems);
    setThumbnailItems(initialSliderItems);
  }, []);

  useEffect(() => {
    const runTimeOut = setTimeout(() => {
      setIsNext(false);
    }, timeRunning);

    const runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [isNext]);

  const showSlider = (type) => {
    const items = document.querySelectorAll(".item");
    if (type === "next") {
      items.forEach((item, index) => {
        item.querySelector("img").classList.add("animateNext");
      });

      setTimeout(() => {
        items.forEach((item, index) => {
          item.querySelector("img").classList.remove("animateNext");
        });
      }, 500);

      setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnailItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setIsNext(true);
    } else {
      items.forEach((item, index) => {
        item.querySelector("img").classList.add("animatePrev"); // Add animation class for previous slide to image
      });

      setTimeout(() => {
        items.forEach((item, index) => {
          item.querySelector("img").classList.remove("animatePrev"); // Remove animation class from image after animation completes
        });
      }, 500);

      setSliderItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
      setThumbnailItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
      setIsNext(false);
    }
  };

  return (
    <div>
      <div className="carousel">
        <div className="list">
          {sliderItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imgUrl} className="imageNext" alt={item.title} />
              <div className="content">
                <div className="Company">{item.Company}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                {/* <div className="des">{item.description}</div> */}
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {thumbnailItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imgUrl} alt={item.title} />
              <div className="content">
                <div className="title">{item?.title}</div>
                <div className="description">{item?.topic}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            &gt;
          </button>
        </div>

        <div className="time"></div>
      </div>
    </div>
  );
}
export default WorkShop;
