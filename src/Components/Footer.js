import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              ANOCARE
            </p>
            <p className="ft-description">
            your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Improved Personal Hygiene in Teens</a>
            </li>
            <li>
              <a href="#services"> Services at your tips</a>
            </li>
            
            
            
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link >General Info</Link>
            </li>
            <li>
              <Link >Privacy Policy</Link>
            </li>
            <li>
              <Link >Terms of Services</Link>
            </li>
            
           
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:anocare@anocare.com">anocare@anocare.com</a>
            </li>
            <li>
              <a href="mailto:appointment@anocare.com">
                appointment@anocare.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+0000000000</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+0000000000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p> ANOCARE. All rights reserved.</p>

       
      </div>
    </div>
  );
}

export default Footer;
