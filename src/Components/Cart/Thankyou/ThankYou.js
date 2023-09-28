import React from "react";
import "../Thankyou/Thankyou.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";
const ThankYouPage = () => {
  return (
    <>
      <div className="card" id="ThankyouCard">
        <div className="card-img">
          <CheckCircleOutlineIcon
            style={{ fontSize: "6rem", color: "lightcoral" }}
          />
        </div>
        <div className="text_center">
          <h1>Thank You!</h1>
          <NavLink to={"/"}>
            <button className="BackBtn">Back To Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
