import React from "react";
import "./style.css";

export default () => {
  return (
    <footer className="footer text-white text-center">
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          Copyright &copy; 2019 Steps
        </div>
        <div className="col-md-2">
          <a className="aboutUs" href="/about" color="inherit" >About Us </a>
        </div>
        <div className="col-md-2">
          <a className="contactUs" href="/contact" color="inherit" >Contact Us </a>
        </div>
      </div>
    </footer >
  );
};
