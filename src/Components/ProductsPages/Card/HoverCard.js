import React, { useState } from "react";
import "../../ProductsPages/Card/HoverCard.scss";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishadd, wishupdate } from "../../../redux/WishlistSlice";
const HoverCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wish); // Assuming your wishlist is stored in Redux

  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (!isInWishlist) {
      dispatch(wishadd(product));
      alert("Added to Wishlist");
    } else {
      // You can dispatch a wishupdate action here if you have specific update logic
      // dispatch(wishupdate(product));
      alert("Already in Wishlist");
    }
  };
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <>
      <div className="productDetails" id="CardHover">
        <div className="img-contain">
          <NavLink to={`/ProductsDetails/${product.id}`}>
            <img src={product.image} />
          </NavLink>
        </div>
        <button
          className="wish-btn"
          style={{ textAlign: "center" }}
          onClick={() => addToWishlist(product)}
          disabled={isInWishlist}
        >
          <FavoriteIcon style={{ color: isInWishlist ? "red" : "" }} />
          WISHLIST
        </button>
        <div
          className="text-contain"
          style={{ textAlign: "left", marginTop: "10px" }}
        >
          <span>
            Size:S<br></br>
          </span>
          <span style={{ fontWeight: "900" }}>Rs.{product.price}</span>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
