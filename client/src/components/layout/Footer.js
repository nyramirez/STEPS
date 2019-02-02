import React from "react";
import "./style.css";

export default () => {
  return (
    <footer className="footer text-white text-center">
      <a className="aboutUs" href="/about" color="inherit" >About Us </a>
      Copyright &copy; {new Date().getFullYear()} Steps
    </footer>
  );
};
