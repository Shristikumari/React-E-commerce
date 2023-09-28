import { React, useEffect, useState } from "react";
import "../ProductDetails/ProductsDetails.scss";
import NavBars from "../../common/Header/NavBars";
import SimilarProductCard from "../Product/SimilarPrdoduct/SimilarPrdoduct";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink, redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";
import { add } from "../../../redux/cartSlice";
import { wishadd, wishupdate } from "../../../redux/WishlistSlice";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../common/Footer/Footer";

const ProductDetailsPage = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { productId } = useParams();
  const [similarProducts, setSimilarProducts] = useState([]);
  //add to card
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const productsDetails = products.find((item) => item.id == productId);
  const Cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wish); // Assuming your wishlist is stored in Redux

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (productsDetails) {
      // Find similar products based on category
      const categorySimilarProducts = products.filter(
        (product) =>
          product.category === productsDetails.category &&
          product.id !== productsDetails.id
      );

      setSimilarProducts(categorySimilarProducts);
    }
  }, [productsDetails]);

  if (!productsDetails) {
    return <p>Loading...</p>; // Add loading state or handle this case as needed
  }
  const handleAddToCart = (productsDetails) => {
    if (!isAuthenticated) {
      alert("Please log in to add items to your cart.");
      window.location.href = "/";
    }
    const isInCartList = Cart.some((item) => item.id === productsDetails.id);

    if (isAuthenticated && !isInCartList) {
      dispatch(add(productsDetails));
      alert("Added to Cart!");
    } else if (isInCartList) {
      alert("Already in Cart");
    }
  };
  const isInCartList = Cart.some((item) => item.id == productsDetails.id);
  //add to wishlist

  const addToWishlist = (productsDetails) => {
    const isInWishlist = wishlist.some(
      (item) => item.id === productsDetails.id
    );
    if (!isInWishlist) {
      dispatch(wishadd(productsDetails));
      alert("Added to Wishlist");
    } else {
      // You can dispatch a wishupdate action here if you have specific update logic
      // dispatch(wishupdate(product));
      alert("Already in Wishlist");
    }
  };
  const isInWishlist = wishlist.some((item) => item.id === productsDetails.id);

  return (
    <>
      <NavBars />
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div class="d-flex flex-row">
          <div class="info">
            <h1>
              Home /{productsDetails.category} /<b>{productsDetails.title}</b>
            </h1>
          </div>
        </div>
        {/*******************/}
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3 col-md-6">
              <div className="product_img">
                <img src={productsDetails.image} alt="" />
              </div>
            </div>
            <div class="col-sm-9 col-md-6">
              <div className="singletext-contain">
                <span
                  className="item_name_description"
                  style={{ textAlign: "left" }}
                >
                  <h1>
                    <b>{productsDetails.title}</b>
                  </h1>
                  <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
                    {productsDetails.description}
                  </p>
                </span>
                <div className="review-item">
                  5 <StarIcon />| 0 Rating
                </div>
                {/* pricing*/}
                <div className="price">
                  <span>
                    <b>₹ {productsDetails.price}</b> MRP<strike> 6999</strike>
                    <b style={{ color: "orange" }}>(80% OFF)</b>
                  </span>
                  <p style={{ color: "green" }}>inclusive of all taxes</p>
                </div>
                <div className="size">
                  <h4>SELECT SIZE</h4>
                  <select>
                    <option>
                      <span>size</span>
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
                {/****add to card button */}

                <div className="cart_wish_button">
                  <button
                    className="cart-btn"
                    onClick={() => handleAddToCart(productsDetails)}
                    disabled={isInCartList}
                  >
                    <ShoppingBagIcon />
                    {isInCartList ? (
                      <span style={{ color: "white" }}>GO TO BAG</span>
                    ) : (
                      <span style={{ color: "white" }}>ADD TO BAG</span>
                    )}
                  </button>
                  <div className="wish-btn_div">
                    <button
                      className="wish-btn"
                      onClick={() => addToWishlist(productsDetails)}
                      disabled={isInWishlist}
                    >
                      <FavoriteIcon
                        style={{ color: isInWishlist ? "red" : "" }}
                      />
                      WISHLIST
                    </button>
                  </div>
                </div>
                {/*******delivery details */}
                <div className="delivery-pincode">
                  <h4>DELIVERY OPTIONS</h4>
                  <input type="pincode" placeholder="enter pincode" />
                  <span
                    style={{
                      color: "pink",
                    }}
                  >
                    check
                  </span>
                  <p>
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </p>
                  <p>100% Original Products</p>
                  <p>Pay on delivery might be available</p>
                  <p>Easy 14 days returns and exchanges</p>
                </div>
                {/*******products details */}
                <div className="products-details">
                  <h4>PRODUCTS DETAILS</h4>
                  <p>White embroidered Kurta with Trousers</p>
                  <span>Kurta design</span>
                  <p>Floral embroidered</p>
                  <p>A-line shape</p>
                  <p>Regular style</p>
                  <p>Round neck, three-quarter flared sleeves</p>
                  <p>Thread work detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*******similar products cards */}
      <SimilarProductCard similarProducts={similarProducts} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
