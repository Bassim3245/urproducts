import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./services/Services";
import Footer from "./footer/Footer.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Product from "./Product/Product.jsx";
import WorkShop from "./WorkShob/WorkSH";
import "./Main.css";
import Event from "./Event/Event.jsx";
import Project from "./Project/Project.jsx";
import Solution from "./OurSolution/Solution.jsx";
import ProductUr from "./ProductUr/ProductUr.jsx";
import HomeCategory from "./Clints/ClintDetails.jsx";
import Week from "./week/weak.jsx";
import DisplayFutureCard from "./Future/Future.jsx";
import FutureDetails from "./Future/Future.jsx";
import AllJobTableSole from "./ExcutedWork/AllJobTableSole.jsx";

const MainPage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Home />
        
      </div>

      <div>
        <Week />
        
      </div>
      
      

      

      
      {/* <div
        className="pb-5 pt-5 backImageAbout"
        style={{ backgroundColor: "#eee" }}
      >
        {" "}
        <About />
      </div> */}
      {/* <div className="mb-3 mt-2">
        {" "}
        <Services />
      </div> */}
      {/* <div className="mt-4">
        <WorkShop />
      </div> */}
   
      {/* <div className="pt-4" style={{ backgroundColor: "#eee" }}>
        {" "}
        <ProductUr />
      </div> */}
      {/* <div className="pt-4" style={{ backgroundColor: "#eee" }}>
        {" "}
        <Solution />
      </div>
      <div>
        <Project />
      </div>
      <div style={{ backgroundColor: "#eee" }}>
        <Event />
      </div> */}
      <div style={{ backgroundColor: "#ececec" }} className="pb-4">
        {" "}
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
