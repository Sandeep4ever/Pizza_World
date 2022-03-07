import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import pizzaImg from "../../images/pizza_logo.png";
import "./header.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";
const Header = () => {
  const globalDataContext = useContext(GlobalDataContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <h1>Pizza World</h1>
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={pizzaImg} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler bg-light"
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
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white me='2' "
                aria-current="page"
                to="/"
              >
                <span className="home"> Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <abbr title="Cart">
                <NavLink className="nav-link text-white" to="/cart">
                  <button className="btn btn-primary float-end">
                    <i className="fas fa-cart-plus"> </i>
                    <div className="badge bg-danger">
                      {globalDataContext?.selectedPizzaData.length}
                    </div>
                  </button>
                </NavLink>
              </abbr>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
