import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/Home";
import ProductPage from "./Components/ProductsPages/Product/Product";
import ProductDetailsPage from "./Components/ProductsPages/ProductDetails/ProductsDetails";
import ChekoutItem from "./Components/Cart/Checkout/CheckOut";
import Wishlist from "./Components/Cart/Wishlist/Wishlist";
import ThankYouPage from "./Components/Cart/Thankyou/ThankYou";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:category" element={<ProductPage />} />
          <Route
            path="/ProductsDetails/:productId"
            element={<ProductDetailsPage />}
          />
          <Route path="/checkout" element={<ChekoutItem />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ThankYou" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
