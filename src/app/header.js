import React from "react";
import { LOGO_URL } from "../util/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Khana Khajana Logo" />
        <h1>Khana Khajana</h1>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};