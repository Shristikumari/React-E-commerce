import React, { useState, useContext, useEffect } from "react";
import "../Product/Products.scss";
import NavBars from "../../common/Header/NavBars";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useParams } from "react-router-dom";
import { Category } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";
import HoverCard from "../Card/HoverCard";
import SeachProducts from "./Search/search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../common/Footer/Footer";

function ProductPage() {
  const { category } = useParams();

  const [checkedCategories, setcheckedCategories] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const searchQuery = useSelector((state) => state.search.query);
  const searchResults = useSelector((state) => state.search.results);
  console.log(searchResults);
  const category_rel_Products = products.filter(
    (item) => item.category === category
  );

  const [categoryProducts, setCategoryProducts] = useState(
    category_rel_Products
  );
  //image hover card
  const handleMouseEnter = (productId) => {
    setIsHovered((prevHovered) => ({
      ...prevHovered,
      [productId]: true,
    }));
  };

  const handleMouseLeave = (productId) => {
    setIsHovered((prevHovered) => ({
      ...prevHovered,
      [productId]: false,
    }));
  };
  //subcategory*****/
  const categoryfilter = [
    ...new Set(category_rel_Products.map((item) => item.title)),
  ];
  const categoryBrand = [
    ...new Set(category_rel_Products.map((item) => item.company)),
  ];
  ///to get iteam name in upper
  const productTypes = category_rel_Products.map((product) => product.type);
  const uniqueProductTypes = [...new Set(productTypes)];
  //
  //updated data based on categoryfilter
  //subcategory filter
  const filterItem = (categoryfilter) => {
    if (checkedCategories) {
      const updatedlist = category_rel_Products.filter((curEle) => {
        return curEle.title === categoryfilter;
      });
      setCategoryProducts(updatedlist);
    } else {
      setcheckedCategories();
      setCategoryProducts(category_rel_Products);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <NavBars />
      <div className="container-fluid">
        <div class="d-flex flex-row">
          <div className="prod_cat_name">
            <h1>
              Home /<b>{category}</b>
            </h1>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div className="prod_item_count">
            <h1>
              <b>{category}</b>- items
            </h1>
          </div>
        </div>
        {/************** */}
        <div className="container-fluid">
          <div className="row">
            <div class="col-sm-3 col-md-3">
              <div className="card">
                <SeachProducts
                  optionType={"CATEGORY"}
                  inputPlaceholder={"search for category"}
                />
                <FormGroup style={{ marginLeft: "30px" }}>
                  {categoryfilter &&
                    categoryfilter.map((category) => (
                      <FormControlLabel
                        style={{ fontSize: "22px" }}
                        key={category} // Add a unique key
                        control={<Checkbox />}
                        label={category.split(" ")[2]}
                        onChange={() => filterItem(category)}
                      />
                    ))}
                </FormGroup>
              </div>
            </div>
            {/**********************/}
            <div class="col-sm-3 col-md-9 ">
              <div className="item-container">
                <div className="row">
                  {categoryProducts &&
                    categoryProducts.map((product) => {
                      const productId = product.id; // Get the product ID
                      return (
                        <>
                          <div className="col-sm-3 col-md-3">
                            <div
                              className="container"
                              id="productDetails"
                              onMouseEnter={() => handleMouseEnter(productId)}
                              onMouseLeave={() => handleMouseLeave(productId)}
                            >
                              {isHovered[productId] ? (
                                <HoverCard product={product} />
                              ) : (
                                <div className="productDetails">
                                  <div className="img-contain">
                                    <NavLink
                                      to={`/ProductsDetails/${product.id}`}
                                    >
                                      <img src={product.image} />
                                    </NavLink>
                                    <div className="review">
                                      {/* {product.ratings.average} <StarIcon />|
                        {product.ratings.total_reviews} */}
                                    </div>
                                  </div>
                                  <div className="text-contain">
                                    <h3>{product.title}</h3>
                                    <span style={{ fontWeight: "900" }}>
                                      Rs.{product.price}
                                      <span style={{ color: "gray" }}>
                                        <strike> Rs. 799</strike>
                                        <b style={{ color: "orange" }}>
                                          (80% OFF)
                                        </b>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
