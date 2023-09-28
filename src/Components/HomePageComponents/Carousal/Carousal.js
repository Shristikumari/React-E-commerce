import { useEffect } from "react";
import Slider from "react-slick";
import "../Carousal/Carousal.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";

const Carousal = (props) => {
  const { style, slidesToScroll } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: slidesToScroll,
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container-fluid">
      <div className="slider">
        {products.length > 0 ? (
          <Slider {...settings} style={style} className="silder-main">
            {products &&
              products.map((product, index) => {
                return (
                  <div className="slider-side" key={product.id}>
                    <NavLink
                      to={{
                        pathname: `/product/${product.category}`,
                        state: { products },
                      }}
                    >
                      <h3 className="img">
                        <img src={product.image} alt={product.title} />
                      </h3>
                    </NavLink>

                    <h1>{product.title.split(" ")[0]}</h1>
                    <span>₹{product.price}</span>
                  </div>
                );
              })}
          </Slider>
        ) : (
          // You can render a loading indicator here if needed
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Carousal;
