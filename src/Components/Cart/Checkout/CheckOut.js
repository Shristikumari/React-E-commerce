import { React, useState } from "react";
import "../Checkout/CheckOut.scss";
import NavBars from "../../common/Header/NavBars";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, resetCart } from "../../../redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../common/Footer/Footer";
const ChekoutItem = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const cart = useSelector((state) => state.cart);

  //order place mangement
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handlePlaceOrder = () => {
    alert("Ordered Succesfully!");
    dispatch(resetCart());
  };
  const RemoveAll = () => {
    dispatch(resetCart());
  };
  //*********8 */
  const handleDeleteCart = (id) => {
    dispatch(remove(id));
  };
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((product) => product.id === item.id);
    if (product) {
      return total + product.price;
    }
    return total;
  }, 0);
  const discount = (totalPrice * 10) / 100;
  const Conveinencefee = 50;
  return (
    <>
      <NavBars />
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-7">
            <div className="left-side">
              <div className="card" id="card-one">
                {isAuthenticated && (
                  <div class="d-flex flex-row ">
                    <div className="text">
                      <img src={user.picture} alt={user.name} />
                      {user.name}
                    </div>
                    <div className="btn-pin">
                      <span type="text">{user.email}</span>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="d-flex flex-row ">
                  <div>
                    <b>Available Offer</b>
                  </div>
                  <div>
                    <p>10% instant discount on kotak credit card</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="d-flex flex-row ">
                  <div className="check-item-true">
                    <Checkbox />
                    <span>
                      {0}/{cart.length} SELECTED
                    </span>
                  </div>
                  <div className="remove">
                    <span>
                      <button onClick={RemoveAll}>REMOVE</button> | MOVE TO
                      WISHLIST
                    </span>
                  </div>
                </div>
              </div>
              {/******card components */}
              {cart.map((item) => {
                return (
                  <div className="card">
                    <div className="card-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="card-text">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <span>
                        <b>₹ {item.price}</b> MRP<strike> 6999</strike>
                        <b style={{ color: "orange" }}>(80% OFF)</b>
                      </span>
                      <div className="cardfooter">
                        <div className="itemsave">
                          <button onClick={() => handleDeleteCart(item.id)}>
                            Save For Letter
                          </button>
                        </div>
                        <div className="itemReomve">
                          <button onClick={() => handleDeleteCart(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="right-side">
              <div className="card">
                <span>PRICE DETAILS</span>
                <div className="container">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Total MRP</td>
                        <td>₹ {totalPrice}</td>
                      </tr>
                      <tr>
                        <td>Discount MRP</td>
                        <td>₹ -{discount}</td>
                      </tr>
                      <tr>
                        <td>Conveinence Fee</td>
                        <td>₹ {totalPrice ? Conveinencefee : 0}</td>
                      </tr>
                      <tr style={{ borderTop: "1px solid gray" }}>
                        <td>Total Amount</td>
                        <td>
                          ₹
                          {totalPrice -
                            discount +
                            (totalPrice ? Conveinencefee : 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <NavLink to="/ThankYou">
                    <button className="Ordplace-btn" onClick={handlePlaceOrder}>
                      PLACE ORDER
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChekoutItem;
