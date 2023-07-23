import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Games Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                onClick={() => {navigate("/purchasehistory")}}
                className="btn btn-dark btn-no-outline">
                  <MdHistory 
                  className="ml-5" size={20} style={{position: "relative", right: "5px", bottom: "1px"}} 
                  />
                  View purchase history
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="btn btn-dark btn-no-outline"
                  onClick={() => {navigate("/cart")}}>
                  <FaShoppingCart className="ml-5" size={16} style={{position: "relative", right: "5px", bottom: "1px"}} />
                  Your Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
