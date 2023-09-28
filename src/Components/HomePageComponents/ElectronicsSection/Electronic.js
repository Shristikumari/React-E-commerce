import React, { useContext, useEffect } from "react";
import "../ElectronicsSection/Electronic.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";

function Electroins() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.list);
  const products = product.filter((item) => item.category == "electronics");
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="conatiner-fluid">
        <div className="electronicSection">
          {products &&
            products.map((curEle) => {
              return (
                <div className="electonics">
                  <NavLink to={`/product/${curEle.category}`}>
                    <div className="img-sec">
                      <img src={curEle.image} />
                    </div>
                  </NavLink>

                  <div className="text-sec">
                    <span>{curEle.title.split(" ")[0]}</span>
                    <span>₹{curEle.price}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Electroins;
