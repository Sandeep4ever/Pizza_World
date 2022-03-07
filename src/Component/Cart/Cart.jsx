import React, { useContext, useEffect } from "react";
import "./cart.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const globalDataContext = useContext(GlobalDataContext);
  useEffect(() => {
    console.log(globalDataContext.selectedPizzaData);
  }, []);
  console.log("data", globalDataContext.selectedPizzaData);
  const handleSelectedDelete = (index) => {
    globalDataContext.setSelectedPizzaData(
      globalDataContext.selectedPizzaData.filter((item, i) => i !== index)
    );
  };

  return (
    <>
      {globalDataContext.selectedPizzaData.length === 0 ? (
        <div className="container con">
          <div className="card emptyCard">
            <div className="card-title">
              <h5>My Cart</h5>
            </div>
            <div className="center">
              <img
                src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt="img"
              />
              <h4 className="emptyHeadingh5">Your cart is empty</h4>
              <h6 className="emptyHeadingh6">Add item to it now!</h6>

              <NavLink to="/">
                <button className="btn btn-primary">Shop now</button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card-title">
            <h5>My Cart</h5>
          </div>
          {globalDataContext.selectedPizzaData &&
            globalDataContext.selectedPizzaData.map((el, index) => {
              return (
                <div
                  className="card d-flex flex-row mt-4  selected_pizza_card"
                  key={index}
                >
                  <div className="selected_img_container">
                    <img
                      src={el?.img}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{el?.pizzaName}</h5>
                    <div>
                      <span className="text-primary">Selected Toppings: </span>
                      {el?.selectedToppings.map((item, index) => {
                        return (
                          <span key={index}>
                            <span className="ml-2">{`  ${item} , `}</span>
                          </span>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-end">
                      <Button
                        className="btn-outline-danger text-white"
                        onClick={() => handleSelectedDelete(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Cart;
