import React, { useEffect, useReducer, useState } from "react";
import banner from "../../Images/banner.png";
import "../HomePage/Home.scss";
import { NavLink } from "react-router-dom";
import NavBars from "../common/Header/NavBars";
import Carousal from "../HomePageComponents/Carousal/Carousal";
import Electronics from "../HomePageComponents/ElectronicsSection/Electronic";
import Brand from "../HomePageComponents/BrandCollection/Brand";
import CategoryCardSection from "../HomePageComponents/CategoryCardSection/CategoryCard";
import Footer from "../common/Footer/Footer";
function HomePage() {
  const slidesToScrollValue = 6;
  const slidesToScrollValuesec = 4;

  return (
    <>
      <NavBars />
      <div className="container-fluid">
        <div className="container">
          <div className="banner">
            <img src={banner} />
          </div>
        </div>
        <div className="heading-deals">
          <h1>OMG ! DEALS</h1>
          <h1
            style={{ fontSize: "1.8rem", color: "#282c3f", fontWeight: "400" }}
          >
            Medal-Worthy Brand To Bag
          </h1>
        </div>
        <div className="slider-banner">
          <Carousal slidesToScroll={slidesToScrollValuesec} />
        </div>
        <div className="heading-deals">
          <h1>ELECTRONICS DEVICES</h1>
          <h1 style={{ fontSize: "28px", color: "#282c3f", fontWeight: "400" }}>
            Best Products
          </h1>
        </div>
        <div className="Electronics_section">
          <Electronics />
        </div>
        <div className="heading-deals">
          <h1>Grand Gobal Brands</h1>
        </div>
        <div className="slider-banner_One">
          <Carousal slidesToScroll={slidesToScrollValue} />
        </div>
        <div className="heading-deals">
          <h3>Namste Autumn</h3>
          <h1>COLLECTION</h1>
        </div>
        <div className="collection_section">
          <Brand />
        </div>
        <div className="heading-deals">
          <h1>Shop By Category</h1>
        </div>
        <div className="category_section">
          <CategoryCardSection />
        </div>
      </div>
      {/*main div close*/}
      <Footer />
    </>
  );
}

export default HomePage;
