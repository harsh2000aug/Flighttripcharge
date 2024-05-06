import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CallGif from "../../assets/images/new/call-image.gif"
import CountrySelector from "../countrySeloctor/CountrySelector"
import allcard from "../../assets/images/flight/card-home.webp"
import moment from "moment";

import "./Footer.styles.css";

const Footer = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()

  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };

  return (
    <footer class="footer">
      <div class="cm-fixed-footer-cta cm-txt-center cm-white-bg box-shadow-2 cm-wt-600">
        <p>Save Instantly on Unpublished Deals - CALL NOW<br />
          <a href="tel:+1-877-400-0302" class="cm-white-col"><i class="fa-solid fa-phone " aria-hidden="true"></i>+1-877-400-0302</a></p>
      </div>
      <div class="container">
        <div class="cm-flex">
          <div class="col-25">
            <img src={require("../../assets/images/new/logo.png")} alt="" />
            <p>Flighttripcharge is your one-stop platform to explore competitive airfares and great discount deals on online flight booking across all major destinations in the USA, UK, and Canada. As a thriving booking platform, we endeavor to eliminate every challenge that comes your way while browsing flight schedules online.</p>
          </div>
          <div class="col-25 lpad">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
              <li><a href="/refund-and-cancellation-policy">Refund and Cancellation</a></li>
            </ul>
          </div>
          <div class="col-25">
            <h3>Top Destinations</h3>
            <ul>
              <li><a href="#" onClick={(e) => handleExpClick("MIA", "LAS")}>Miami</a></li>
              <li><a href="#" onClick={(e) => handleExpClick("SFO", "YSI")}>San Francisco</a></li>
              <li><a href="#" onClick={(e) => handleExpClick("LON", "NYC")}>London</a></li>
              <li><a href="#" onClick={(e) => handleExpClick("TYO", "OSA")}>Tokyo</a></li>
              <li><a href="#" onClick={(e) => handleExpClick("LAS", "LAX")}>Las Vegas</a></li>
              <li><a href="#" onClick={(e) => handleExpClick("DPS", "BPN")}>Bali</a></li>
            </ul>
          </div>
          <div class="col-25">
            <h3>Reach Us At</h3>
            <ul>
              <li>
                <i class="fa-solid fa-phone" aria-hidden="true"></i>+1-877-400-0302</li>
              <li>
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>info@flighttripcharge.com</li>
              <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i>Trian Inc. <br />47 Eliot St <br /> Natick, MA 01760, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
