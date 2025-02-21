import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container d-flex justify-content-between">
        <div>
          <h5 className="fw-bold">MIRROR</h5>
        </div>
        <div>
          <h6 className="fw-bold">CUSTOMER SERVICE</h6>
          <p>Contact Us</p>
          <p>Order Status</p>
          <p>Shipping</p>
          <p>Returns & Exchanges</p>
        </div>
        <div>
          <h6 className="fw-bold">ABOUT US</h6>
          <p>Store Locator</p>
          <p>Careers</p>
        </div>
        <div>
          <h6 className="fw-bold">PRIVACY POLICY</h6>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h6 className="fw-bold">FOLLOW US</h6>
          <FaInstagram size={24} className="me-3" />
          <FaFacebook size={24} className="me-3" />
          <FaTwitter size={24} />
        </div>
      </div>
    </footer>
  );
}
