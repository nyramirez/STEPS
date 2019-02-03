import React from "react";
import { Link } from "react-router-dom";
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
        <div className="col-md-4">
          <ul className="navbar-nav ml-auto">
            <div className="row">
              <div className="col-md-6">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                   </Link>
                </li>
              </div>
              <div className="col-md-6">
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
        );
      };
