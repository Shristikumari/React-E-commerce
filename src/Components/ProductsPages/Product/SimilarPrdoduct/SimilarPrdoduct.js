import React from "react";
import "../SimilarPrdoduct/SimilarPrdoduct.scss";
import { NavLink } from "react-router-dom";

const SimilarProductCard = ({ similarProducts }) => {
  return (
    <div div className="container-fluid" id="Maincontainer">
      <div class="d-flex flex-row" id="similar">
        <h1>SIMILAR PRODUCTS</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          {similarProducts.map((item) => {
            return (
              <div className="col-sm-3 col-md-3">
                <div className="card" style={{ margin: "10px" }}>
                  <img src={item.image} alt="" />
                  <div className="card-text">
                    <NavLink to={`/ProductsDetails/${item.id}`}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <span>
                        <b>₹ {(item.price * 1) / 100}</b> MRP
                        <strike> {item.price}</strike>
                        <b style={{ color: "orange" }}>(1% OFF)</b>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
