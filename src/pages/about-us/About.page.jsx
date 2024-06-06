import React, { useEffect, useState } from "react";
import "./About.styles.css";
import about_fuss from "../../assets/images/about/about_fuss.jpg";
import SEO from "../../utils/SEO";
import { Helmet } from "react-helmet";

const AboutPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <SEO title="About Page" description="description"/> */}
      <div className="cm-about-page-container">
        <Helmet>
          <title>Flighttripcharge | About us</title>
        </Helmet>

        <div className="inner-banner">
          <h2 className="cm-section-h cm-txt-center cm-white-col">About Us</h2>
        </div>

        <div className="cm-section cm-about-us-container">
          <div className="cm-page-center cm-flex-type-1">
            <div className="cm-left-col">
              <h2 className="cm-section-h">
                Avail the advantage of the best flight deals and start your journey with Flighttripcharge.com. </h2>
              <p className="cm-section-sp">
                At Flighttripcharge, we turn your travel dreams into reality with unbeatable deals and seamless booking experiences. We make every journey affordable and hassle-free across all major destinations in the USA, UK, and Canada.
              </p>
              {/* <ul>
              <li>
                <strong>Promising Deals</strong> -
                <span>
                  We strive to make online booking hassle-free for our customers
                  across USA, UK, and Canada.
                </span>
              </li>
              <li>
                <strong>Redefined Experience</strong> -
                <span>
                  Our team at Trian Fly focuses on improving the travel
                  experience with impeccable flight deals.
                </span>
              </li>
              <li>
                <strong>All-Embracing Offerings</strong> -
                <span>
                  Our team at Trian Fly focuses on improving the travel
                  experience with impeccable flight deals.
                </span>
              </li>
              <li>
                <strong>Ceaseless Support</strong> -
                <span>
                  Need assistance while booking budget-friendly flights online?
                  Our support team is here to help!
                </span>
              </li>
            </ul> */}
            </div>
            <div className="cm-right-col">
              <i className="fa-solid fa-plane-circle-check cm-flex-type-2 cm-prim-bg cm-white-col"></i>
            </div>
          </div>
        </div>


        <div className="service_section">
          <div className="cm-page-center">
            <h2 style={{ marginBottom: "15px" }}>Why Flighttripcharge.com ?</h2>
          </div>
          <div className="cm-page-center cm-flex cm-flex-wrap">
            <div className="cm-wd-25">
              <i className="fa-solid fa-tag"></i>
              <h4>Promising Deals</h4>
              <p>At Flighttripcharge.com, we strive to make online booking a breeze for our valued clients across the United States, the United Kingdom, and Canada.</p>
            </div>
            <div className="cm-wd-25">
              <i className="fa-solid fa-circle-check"></i>
              <h4>Redefined Experience</h4>
              <p>The team at Flighttripcharge.com is dedicated to improving the travel experience by providing exceptional airline deals.</p>
            </div>
            <div className="cm-wd-25">
              <i className="fa-solid fa-heart"></i>
              <h4>All-Embracing Offerings</h4>
              <p>We provide exclusive flight deals, last-minute offers, and unbeatable discounts to top destinations worldwide.</p>
            </div>
            <div className="cm-wd-25">
              <i className="fa-solid fa-clock"></i>
              <h4>Ceaseless Support</h4>
              <p>Need help booking affordable flights online? Our customer support team is available to assist round the clock.</p>
            </div>
          </div>
        </div>

        <div className="cm-section cm-about-fuss-container">
          <div className="cm-page-center cm-flex-type-1">
            <div className="cm-left-col">
              <img
                src={about_fuss}
                alt="Fuss-Free Flight Booking"
                className="box-shadow-2"
              />
            </div>
            <div className="cm-right-col">
              <h2 className="cm-section-h">
                Effortless Flight Booking for Memorable Experiences
              </h2>
              <p>
                Travel is an unavoidable part of our lives, whether it's for an essential business meeting, a family vacation, or a much-needed getaway from work. As a well-established travel service company, we are aware with the many issues customers confront when planning their trips.
              </p>
              <p>
                Offering great deals and discounts on flight tickets, we aim to enhance your online booking experience. We believe cost-efficient travel planning is the key to memorable trips. That's why we ensure you find the best flights within your budget and preferred timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
