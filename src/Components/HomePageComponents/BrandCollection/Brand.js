import { React, useContext } from "react";
import "../BrandCollection/Brand.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";

function Brand() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.list);
  const products = product.filter((item) => item.category == "electronics");
  return (
    <>
      <div className="conatiner-fluid">
        <div className="BrandSection">
          {products &&
            products.map((curEle) => {
              return (
                <div className="brand">
                  <NavLink to={`/product/${curEle.category}`}>
                    <div className="brand_img">
                      <img src={curEle.image} />
                    </div>
                  </NavLink>

                  <div className="text-part">
                    <h1>{curEle.title.split(" ")[0]}</h1>
                    <p>
                      Explore
                      <span>
                        <ArrowForwardIosIcon
                          style={{ fontSize: "12px", marginLeft: "7px" }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Brand;
