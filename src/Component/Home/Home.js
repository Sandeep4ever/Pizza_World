import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import axios from "axios";
import "./Home.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
  injectStyle();
}

const Home = () => {
  const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const [masterData, setMasterData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [show, setShow] = useState(false);
  const [currentPizzaData, setCurrentPizzaData] = useState({
    isRadio: null,
    toppingItem: [],
    pizzaName: "",
    img: "",
    selectedToppings: [],
    selectedSize: [],
  });

  const [sortedData, setSortedData] = useState([]);

  const handleClose = () => setShow(false);
  const globalDataContext = useContext(GlobalDataContext);
  useEffect(() => {
    const getData = async () => {
      let res = await axios(url);
      if (res && res?.status === 200 && res.data && res.data.length) {
        setMasterData(res.data);
        setShowLoader(false);
      }
    };

    getData();
  }, []);
  console.log("alldata", masterData);
  const selectToppings = (item, index) => {
    setCurrentPizzaData({
      isRadio: item?.toppings[0]?.isRadio,
      toppingItem: item?.toppings[0]?.items,
      pizzaName: item?.name,
      img: item?.img_url,
      selectedToppings: [],
      selectedSize: [],
    });
    setShow(true);
  };

  const handleSelectTopping = (isSingleSelect, e) => {
    if (isSingleSelect) {
      let arr = e.target.value;
      console.log(arr);
      setCurrentPizzaData((prev) => {
        return { ...prev, selectedToppings: [e.target.value] };
      });
    } else {
      let arr = e.target.value;
      console.log(arr);
      setCurrentPizzaData((prev) => {
        return { ...prev, selectedToppings: [...prev.selectedToppings, arr] };
      });
    }
  };

  function getToppingDetails() {
    if (currentPizzaData.toppingItem && currentPizzaData.toppingItem.length) {
      if (currentPizzaData.isRadio) {
        return currentPizzaData.toppingItem.map((item, index) => (
          <span key={index} className="m-1">
            <input
              type="radio"
              name="item"
              className="m-1"
              value={item.name}
              onChange={(e) => handleSelectTopping(currentPizzaData.isRadio, e)}
            />
            <label>{item.name}</label>
          </span>
        ));
      } else {
        return currentPizzaData.toppingItem.map((item, index) => (
          <span key={index} className="m-1">
            <input
              type="checkbox"
              name="item"
              className="m-1"
              value={item.name}
              onChange={(e) => handleSelectTopping(currentPizzaData.isRadio, e)}
            />
            <label>{item.name}</label>
          </span>
        ));
      }
    }
  }

  const addToCart = () => {
    globalDataContext.setSelectedPizzaData((prev) => {
      return [...prev, currentPizzaData];
    });
    toast.success("Yep ! your pizza has been added to your cart");
    setShow(false);
  };

  const sortData = (event) => {
    if (event.target.value === "price") {
      setSortedData(masterData.sort((a, b) => a.price - b.price));
    }
    if (event.target.value === "rating") {
      setSortedData(masterData.sort((a, b) => a.rating - b.rating));
    }
  };

  useEffect(() => {
    if (sortedData.length) {
      setMasterData(sortedData);
      setSortedData([]);
    }
  }, [sortedData]);

  const ratingMapper = (data) => {
    if (String(data).includes(".")) {
      data = Math.floor(data);
      let rating = [];
      for (let i = 1; i <= data; i++) {
        rating.push(i);
      }
      return rating.map((number, index) => {
        if (index === rating.length - 1) {
          return (
            <>
              <i key={number.toString()} className="fa fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </>
          );
        } else {
          return <i key={number.toString()} className="fa fa-star"></i>;
        }
      });
    } else {
      let rating = [];
      for (let i = 1; i <= data; i++) {
        rating.push(i);
      }
      return rating.map((number) => {
        return <i key={number.toString()} className="fa fa-star"></i>;
      });
    }
  };

  return (
    <>
      {showLoader && (
        <div className="loader">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <span
            className="text-white"
            style={{ marginLeft: "2rem", fontSize: "2rem" }}
          >
            Loading....
          </span>
        </div>
      )}

      {!showLoader && masterData && (
        <>
          <div className="sorting_section float-right">
            <select
              name=""
              id=""
              className="select_sorting"
              onChange={sortData}
              defaultValue=""
            >
              <option value="" disabled={true}>
                Select to sort
              </option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div className="pizza-container d-flex justify-content-around flex-wrap">
            {masterData.map((el, index) => {
              return (
                <div className="card pizza_card" key={index}>
                  <div className="img_container">
                    <img
                      src={el?.img_url}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{el?.name}</h5>
                    <div className="description">
                      <p className="card-text">{el?.description}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="rating">
                        <p>Rating: {ratingMapper(el?.rating)} </p>
                      </div>
                      <div className="rating">
                        <p>Price: {el?.price}</p>
                      </div>
                    </div>
                    <p>{el?.isVeg ? "Veg" : "Non-Veg"}</p>

                    <button
                      className="btn btn_pizza_select"
                      variant="dark"
                      onClick={() => selectToppings(el, index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please Select Size & Toppings </Modal.Title>
        </Modal.Header>
        <Modal.Body> {getToppingDetails()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="primary" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Home;
