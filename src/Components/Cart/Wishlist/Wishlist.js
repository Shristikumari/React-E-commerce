import React from "react";
import NavBars from "../../common/Header/NavBars";
import { useDispatch, useSelector } from "react-redux";
import { wishremove } from "../../../redux/WishlistSlice";
import { NavLink } from "react-router-dom";
import { add } from "../../../redux/cartSlice";
const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const wishList = useSelector((state) => state.wish);

  const span = {
    width: "100%",
    color: "lightcoral",
    border: "none",
  };
  return (
    <>
      <NavBars />

      <div className="contaoner-fluid">
        <div className="d-flex" style={{ margin: "30px" }}>
          <h1>My WishList-item</h1>
        </div>
        <div className="row">
          {wishList.map((item) => {
            return (
              <div className="col-sm-3 col-md-2">
                <div className="card">
                  <div className="card-img" style={{ width: "100%" }}>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "15vw", height: "30vh" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <span>Rs.{item.price}</span>
                  </div>
                  <div className="card-footer" style={{ textAlign: "center" }}>
                    <NavLink to={`/ProductsDetails/${item.id}`}>
                      <span style={span}>MOVE tO BAG</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
