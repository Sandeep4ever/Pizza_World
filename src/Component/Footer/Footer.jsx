import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid flex-grow-1 ">
        <div className="row py-5">
          <div className="col-lg-12 text-white text-center">
            <h1 className="display-3 ">Pizza World</h1>
            <p className="lead mb-0">
              This website is created by Sandeep Kumar.
            </p>
            <p className="lead py-3">Delicious Pizza website</p>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Stories
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Payments
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Shipping
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Cancellation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Return Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Terms Of Use
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Security
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Login
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Register
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Sitemap
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Registered Office Address
              </h6>
              <p className="text-muted mb-4">
                Here , write the complete address of the Registered office
                address along with telephone number.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="twitter">
                    <i className="fab fa-2x fa-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="facebook">
                    <i className="fab fa-2x fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="instagram">
                    <i className="fab fa-2x fa-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="pinterest">
                    <i className="fab fa-2x fa-youtube"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="vimeo">
                    <i className="fab fa-2x fa-google"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0" />
        <div className="bg-light py-2">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">© 2022 All risghts reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
