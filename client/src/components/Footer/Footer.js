import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default () => {
  return (
    <footer className="footer mt-5 p-4 text-center">
      <Link className="aboutUs" to="/about" color="inherit">
        About Us{" "}
      </Link>
      <Link className="contactUs" to="/contact" color="inherit">
        Contact Us{" "}
      </Link>
    </footer>
  );
};
