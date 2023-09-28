import React from "react";

const footerstyle = {
  width: "100%",
  height: "20vh",
  backgroundColor: "white",
  color: "Black",
  textAlign: "center",
  marginTop: "40px",
  padding: "20px",
};

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="footer" style={footerstyle}>
        <div className="row">
          <h1>Category</h1>
          <div className="col-sm-3 col-md-12">
            <span
              style={{
                borderBottom: "1px solid gray",
                padding: "20px",
                fontSize: "1.5rem",
              }}
            >
              Men | Women | Kids | Home & Living | Beauty
            </span>
          </div>
        </div>
        <div
          className="d-flex"
          style={{ justifyContent: "center", marginTop: "30px" }}
        >
          <div className="a">
            <b>@2023 Fashion.com</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
