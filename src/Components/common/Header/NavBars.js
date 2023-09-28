import { React, useState } from "react";
import logo from "../../../Images/logo.png";
import "../Header/NavBars.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Margin } from "@mui/icons-material";

function NavBars() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.list);
  const cart = useSelector((state) => state.cart);

  //get category based sabcategory
  const womenMenu = productData.filter((item) => {
    return item.category === "women's clothing";
  });
  const menMenu = productData.filter((item) => {
    return item.category === "men's clothing";
  });

  const kidMenu = productData.filter((item) => {
    return item.category === "Women";
  });
  const HomelivingMenu = productData.filter((item) => {
    return item.category === "eletronics";
  });
  const beauty = productData.filter((item) => {
    return item.category === "Beauty";
  });

  //get unique subcategory
  const uniquewomenMenu = [...new Set(womenMenu.map((item) => item.title))];
  const uniqueMenMenu = [...new Set(menMenu.map((item) => item.title))];
  const uniquekidMenu = [...new Set(kidMenu.map((item) => item.title))];
  const uniquehomelivingMenu = [
    ...new Set(HomelivingMenu.map((item) => item.title)),
  ];
  const uniquebeauty = [...new Set(beauty.map((item) => item.title))];

  //search input

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown title="MEN" id="navbarScrollingDropdown">
              {uniqueMenMenu &&
                uniqueMenMenu.map((item) => (
                  <NavDropdown.Item href="#action3">
                    <NavLink key={item} to={`/product/${productData.category}`}>
                      {item}
                    </NavLink>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              {uniquewomenMenu &&
                uniquewomenMenu.map((item) => (
                  <NavDropdown.Item href="#action3">
                    <NavLink key={item} to="">
                      {item}
                    </NavLink>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="KIDS" id="navbarScrollingDropdown">
              {uniquekidMenu &&
                uniquekidMenu.map((item) => (
                  <NavDropdown.Item href="#action3">
                    <NavLink key={item} to="">
                      {item}
                    </NavLink>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="HOME & LIVING" id="navbarScrollingDropdown">
              {uniquehomelivingMenu &&
                uniquehomelivingMenu.map((item) => (
                  <NavDropdown.Item href="#action3">
                    <NavLink key={item} to="">
                      {item}
                    </NavLink>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="BEAUTY" id="navbarScrollingDropdown">
              {uniquebeauty &&
                uniquebeauty.map((item) => (
                  <NavDropdown.Item href="#action3">
                    <NavLink key={item} to="">
                      {item}
                    </NavLink>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="STUDIO" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl variant="standard">
              <Input
                id="input-with-icon-adornment"
                placeholder="Search for products, brands, and more"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Form>
          <Nav>
            <NavDropdown
              title={
                <div className="profile">
                  {isAuthenticated && isAuthenticated ? (
                    <NavDropdown.Item href="#action">
                      <h2 style={{ Margin: "15px" }}>
                        <img
                          src={user.picture}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                          }}
                        />
                        <p>{user.name}</p>{" "}
                      </h2>
                    </NavDropdown.Item>
                  ) : (
                    <>
                      <PersonOutlineIcon />
                      <p>profile</p>
                    </>
                  )}
                </div>
              }
              id="navbarScrollingDropdown"
              className="logindwopdown"
            >
              <div className="log_out">
                {isAuthenticated && (
                  <NavDropdown.Item href="#action">
                    Hello!
                    {user.name}
                  </NavDropdown.Item>
                )}
                {isAuthenticated ? (
                  <NavDropdown.Item href="#action">
                    <div className="logout_p">
                      <NavLink>
                        <button
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Log Out
                        </button>
                      </NavLink>
                    </div>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="#action3">
                    <div className="login_p">
                      <NavLink>
                        <button onClick={() => loginWithRedirect()}>
                          Log In
                        </button>
                      </NavLink>
                    </div>
                  </NavDropdown.Item>
                )}
              </div>
            </NavDropdown>
            <Nav.Link href="#action2">
              <div className="wishlist">
                <NavLink to={"/Wishlist"}>
                  <FavoriteIcon />
                  <p>Wishlist</p>
                </NavLink>
              </div>
            </Nav.Link>
            <Nav.Link href="#action2">
              <div className="bag-cart">
                <NavLink to={"/checkout"}>
                  <Badge
                    badgeContent={cart ? cart.length : 0}
                    color="secondary"
                  >
                    <ShoppingBagIcon />
                  </Badge>
                  <p>Bag</p>
                </NavLink>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
