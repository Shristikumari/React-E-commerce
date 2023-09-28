import React from "react";
import "../CategoryCardSection/CategoryCard.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CategoryCardSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  return (
    <>
      <div className="container-fluid">
        <div className="category_card_sec">
          {products.map((item) => {
            return (
              <div className="section-container">
                <NavLink to={`/product/${item.category}`}>
                  <img src={item.image} alt="" />
                  <div className="text-container">
                    <h6>{item.category}</h6>
                    <span>40-50% OFF</span>
                    <h6>Shop Now</h6>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryCardSection;
