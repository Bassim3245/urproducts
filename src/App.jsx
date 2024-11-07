import MainPage from "./component/Pages/MainPage.jsx";
import Root from "./component/Pages/Root.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutDetails from "./component/Pages/About/aboutDiteals.jsx";
import EventDetails from "./component/Pages/Event/EventDetails.jsx";
import ProductList from "./component/Pages/Product/TypeProduct/ProductType.jsx";
import ProductDetails from "./component/Pages/Product/TypeProduct/Product.jsx";
import SitemapManager from "./sitmap.jsx";
import ViewAllProject from "./component/Pages/Project/AllProject.jsx";
import OpenProjectById from "./component/Pages/Project/OpenProjectById.jsx";
import AllSolution from "./component/Pages/OurSolution/AllSolution.jsx";
import ProductsPage from "./component/Pages/ProductUr/DetailsProduct.jsx";
import ProductUr from "./component/Pages/ProductUr/ProductUr.jsx";
import Header from "./component/Pages/Header/Header.jsx";
import Project from "./component/Pages/Project/Project.jsx";
import Event from "./component/Pages/Event/Event.jsx";
import Solution from "./component/Pages/OurSolution/Solution.jsx";
import Services from "./component/Pages/services/Services.jsx";
import HomeCategory from "./component/Pages/Clints/ClintDetails.jsx";
import FutureDetails from "./component/Pages/Future/Future.jsx";
import Exhibits from "./component/Pages/Exhibits/Exhibits.jsx";
import ExhibitsDetails from "./component/Pages/Exhibits/ExhibitsDetails.jsx";
import WorkShop from "./component/Pages/WorkShob/WorkSH.jsx";
import WorkshopUr from "./component/Pages/WorkshopUr/WorkshopUr.jsx";
import WorkshopUrDetails from "./component/Pages/WorkshopUr/WorkshopUrDetails.jsx";
import AllJobTableSole from "./component/Pages/ExcutedWork/AllJobTableSole.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* هنا نضيف الـ Header داخل الـ Root ليظهر في كل الصفحات */}
      <Route index element={<><Header /><MainPage /></>} />
      <Route path="/AboutDetails" element={<><Header /><AboutDetails /></>} />
      <Route path="/EventDetails/:id" element={<><Header /><EventDetails /></>} />
      <Route path="/ExhibitsDetails/:id" element={<><Header /><ExhibitsDetails /></>} />
      <Route path="/Training/:id" element={<><Header /><WorkshopUrDetails /></>} />
      <Route path="/ProductList/:id" element={<><Header /><ProductList /></>} />
      <Route path="/ProductDetails/:id" element={<><Header /><ProductDetails /></>} />
      <Route path="/SitemapManager" element={<><Header /><SitemapManager /></>} />
      <Route path="/ViewAllProject" element={<><Header /><ViewAllProject /></>} />
      <Route path="/project/ProjectDetails/:id" element={<><Header /><OpenProjectById /></>} />
      <Route path="/AllSolution" element={<><Header /><AllSolution /></>} />
      <Route path="/products/:categoryId" element={<><Header /><ProductsPage /></>} />
      <Route path="/products/" element={<><Header /><ProductUr /></>} />
      <Route path="/Services/" element={<><Header /><Services /></>} />
      <Route path="/Solution/" element={<><Header /><Solution /></>} />
      <Route path="/Project/" element={<><Header /><Project /></>} />
      <Route path="/Eventpage/" element={<><Header /><FutureDetails /></>} />
      <Route path="/Clints/" element={<><Header /><HomeCategory /></>} />
      <Route path="/Clints/" element={<><Header /><HomeCategory /></>} />
      <Route path="/visits/" element={<><Header /><Event /></>} />
      <Route path="/Exhibits/" element={<><Header /><Exhibits /></>} />
      <Route path="/Training/" element={<><Header /><WorkshopUr /></>} />
      <Route path="/job/" element={<><Header /><AllJobTableSole /></>} />

    </Route>
  )
);

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <div className="dispalyLoding ">
          <div className="preloader"></div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
