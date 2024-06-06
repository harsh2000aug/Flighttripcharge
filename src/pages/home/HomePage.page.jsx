import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import moment from "moment";
import "./Homepage.styles.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PopupPage from "../popup-deals/Popuppage";
import axios from "axios";
import { theme_airline_url } from "../../utils/apiInfo";
import BestTour from "../../components/BestTours/BestTour";
import BestTourAu from "../../components/BestTours/BestTourAu";
import BestTourCa from "../../components/BestTours/BestTourCa";
import BestTourIn from "../../components/BestTours/BestTourIn";
import BestTourNz from "../../components/BestTours/BestTourNz";
import BestTourPh from "../../components/BestTours/BestTourPh";
import BestTourQa from "../../components/BestTours/BestTourQa";
import BestTourRp from "../../components/BestTours/BestTourRp";
import BestTourSg from "../../components/BestTours/BestTourSg";
import BestTourUAE from "../../components/BestTours/BestTourUAE";
import BestTourHk from "../../components/BestTours/BestTourHk";
import BestTourMy from "../../components/BestTours/BestTourMy";
import BestTourZa from "../../components/BestTours/BestTourZa";
import BestTourTh from "../../components/BestTours/BestTourTh";
import BestTourUk from "../../components/BestTours/BestTourUk";
import BestTourVn from "../../components/BestTours/BestTourVn";
import Aeroplane from "../../assets/images/new/down.png"

const HomePage = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };

  const loadBestTour = () => {
    let urlname
    urlname = window.location.hostname.split('.')[0];
    if (urlname === 'localhost') {
      urlname = "au"
    } else {
      if (urlname === 'www') {
        urlname = "au"
      }
    }



    return (
      <>
        {urlname === 'Flighttripcharge' ? <BestTour /> : ""}
        {urlname === 'au' ? <BestTourAu /> : ""}
        {urlname === 'ca' ? <BestTourCa /> : ""}
        {urlname === 'hk' ? <BestTourHk /> : ""}
        {urlname === 'in' ? <BestTourIn /> : ""}
        {urlname === 'id' ? <BestTourRp /> : ""}
        {urlname === 'my' ? <BestTourMy /> : ""}
        {urlname === 'nz' ? <BestTourNz /> : ""}
        {urlname === 'ph' ? <BestTourPh /> : ""}
        {urlname === 'qa' ? <BestTourQa /> : ""}
        {urlname === 'sg' ? <BestTourSg /> : ""}
        {urlname === 'sa' ? <BestTourZa /> : ""}
        {urlname === 'th' ? <BestTourTh /> : ""}
        {urlname === 'en' ? <BestTour /> : ""}
        {urlname === 'es' ? <BestTour /> : ""}
        {urlname === 'ae' ? <BestTourUAE /> : ""}
        {urlname === 'uk' ? <BestTourUk /> : ""}
        {urlname === 'vn' ? <BestTourVn /> : ""}
      </>
    )
  }
  // const [showPopup, setPopup] = useState('active')

  // function removePopup(){
  //   setPopup('')
  // }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  const urlFull = window.location.href;
  useEffect(() => {
    axios
      .get(`${theme_airline_url}`, {
        params: {
          url: urlFull,
        },
      })
      .then((response) => {
        setRes(response.data.status);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [urlFull]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Flighttripcharge | Home </title>
      </Helmet>
      {res === "1" ? <PopupPage /> : ""}


      <section className="gap head-section">
        <div className="container">
          <div className="hero-text">
            <h1>Flighttripcharge: Book Flights with Unbeatable Deals and Endless Destinations!</h1>
            <p>Welcome to Flighttripcharge, your ultimate gateway to exploring the world with the best flight deals and seamless booking experience.</p>
          </div>
          <div className="booking-form">
            <FlightSearchForm />
          </div>
        </div>
      </section>

      <section class="gap">
        <div class="container">
          <div class="service-text">
            <h2>Services We Offer</h2>
            <img src={Aeroplane} alt="" />
          </div>
          <div class="service-offer cm-flex">
            <div class="services col-50 cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/1m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Affordable Flight Bookings</h3>
                <p>Searching for the best return flights or the cheapest tickets at the last minute? We take into account low-cost airlines so that you may save a significant amount of money on flight tickets.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/2m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Flight Change with Best Deals</h3>
                <p>Compare flight rescheduling offers on hundreds of airline tickets to get the best deals on flight changes and save money. By modifying your current travel plan, you can receive the price difference back into your account.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/3m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Flight Cancellation with Full Refund</h3>
                <p>Do you have to postpone your trip but are worried about the cancellation charges? According to airline regulations, you have the right to a refund regardless of the kind and class of ticket you purchased.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/4m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Alter the Incorrect Name on The Ticket</h3>
                <p>With our travel professionals' prompt assistance, you can swiftly correct the misspelled name on your previously issued airline ticket.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gap">
        <div class="container">
          <div class="service-text">
            <h2>Our Packages</h2>
            <img src={Aeroplane} alt="" />
          </div>
          <div class="packages cm-flex">
            <div class="pack-detail col-50">
              <div class="package-image" onClick={(e) => handleExpClick("LON", "NYC")}>
                <img src={require("../../assets/images/new/london.jpg")} alt="" />
              </div>
              <div class="package-text">
                <h3>London</h3>
              </div>
            </div>
            <div class=" pack-detail col-50">
              <div class="top">
                <div class="cm-flex">
                  <div class="pack-detail col-50">
                    <div class="package-image" onClick={(e) => handleExpClick("ROM", "ZGS")}>
                      <img src={require("../../assets/images/new/italy.jpg")} alt="" />
                    </div>
                    <div class="package-text-top">
                      <h3>Italy</h3>
                    </div>
                  </div>
                  <div class="pack-detail col-50">
                    <div class="package-image" onClick={(e) => handleExpClick("NYC", "LON")}>
                      <img src={require("../../assets/images/new/newyork.jpg")} alt="" />
                    </div>
                    <div class="package-text-top">
                      <h3>New York</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="top">
                <div class="cm-flex">
                  <div class="pack-detail col-50">
                    <div class="package-image" onClick={(e) => handleExpClick("TYO", "NRT")}>
                      <img src={require("../../assets/images/new/tokyo.jpg")} alt="" /></div>
                    <div class="package-text-top">
                      <h3>Tokyo</h3>
                    </div>
                  </div>
                  <div class="pack-detail col-50" onClick={(e) => handleExpClick("ROM", "FCO")}>
                    <div class="package-image"><img src={require("../../assets/images/new/rome.jpg")} alt="" /></div>
                    <div class="package-text-top">
                      <h3>Rome</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="flex space-bw">
            <div className="col-50">
              <div class="service-text">
                <h2>Why Choose Us</h2>
                <img src={Aeroplane} alt="" />
              </div>
              <div class="choose-us">
                <div class="cm-flex">
                  <div class="top-two">
                    <div class="choose-image">
                      <img src={require("../../assets/images/new/support.png")} alt="" />
                    </div>
                    <div class="choose-text">
                      <h3>24*7 Support</h3>
                    </div>
                  </div>
                  <div class="top-two">
                    <div class="choose-image">
                      <img src={require("../../assets/images/new/best-price.jpg")} alt="" />
                    </div>
                    <div class="choose-text">
                      <h3>Best Price</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-50">
              <div class="service-text">
                <h2>Testimonials</h2>
                <img src={Aeroplane} alt="" />
              </div>
              <div className="testimonials-slider">
                <Slider {...settings}>
                  <div className="tst-slide">
                    <div class="quotes">
                      <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="star">
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                    </div>
                    <p>Flighttripcharge exceeded my expectations with its fantastic deals and efficient booking process. I booked a flight to Miami and saved a lot compared to other sites. I highly recommend it for anyone looking to save on airfare. I'll definitely be using FlightTripCharge for my future travel plans.</p>
                    <h3>Emily Johnson</h3>
                  </div>
                  <div className="tst-slide">
                    <div class="quotes">
                      <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="star">
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                    </div>
                    <p>I've been using FlightTripCharge for several months now, and I've always been delighted with their affordable flight prices. I just had a small difficulty with my booking, but their customer service team was quite attentive and addressed it quickly.  The entire procedure went well, and the customer service was quite helpful.</p>
                    <h3>Alejandro Hernandez</h3>
                  </div>
                  <div className="tst-slide">
                    <div class="quotes">
                      <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="star">
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                      <i class="fa-solid fa-star" aria-hidden="true"></i>
                    </div>
                    <p>I recently booked a flight to New York using Flighttripcharge and was impressed by their fantastic discounts. The entire booking process was smooth and quick, and I appreciated their 24/7 customer support, which was very reassuring. This is definitely my new go-to site for flight bookings.</p>
                    <h3>Svetlana Petrovich</h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment >
  );
};

export default HomePage;
