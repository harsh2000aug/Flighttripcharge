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
import Delta from "../../assets/images/new/delta.png"
import Alaska from "../../assets/images/new/alaska.png"
import United from "../../assets/images/new/united.png"
import Jetblue from "../../assets/images/new/jetblue.png"
import Volaris from "../../assets/images/new/volaris.png"
import Southwest from "../../assets/images/new/southwest.png"
import Person1 from "../../assets/images/new/person1.jpg"
import Person2 from "../../assets/images/new/person2.jpg"
import Person3 from "../../assets/images/new/person3.jpg"
import Person4 from "../../assets/images/new/person4.jpg"
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
            <h1>Unlock your wanderlust and soar to new heights</h1>
            <p>From booking to managing, we are here to oblige & make your journey as smooth and enjoyable as possible. With our fully cm-flexible rates, you can readily reserve, amend, or cancel any aspect of your trip in a matter of minutes!</p>
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
                <p>Looking for a last-minute cheapest flight deal or the best return flights? To help you with the cheapest airfare, we consider low-cost air carriers you can do great savings on airline tickets.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/2m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Flight Change with Best Deals</h3>
                <p>Enjoy great savings on flight changes with the lowest airfares. By comparing flight rescheduling deals on hundreds of airline tickets, you can change your existing flight and get the price difference back into your account.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/3m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Flight Cancellation with Full Refund</h3>
                <p>Do you need to cancel your flight but are concerned about losing money? As per air carrier policies, you are entitled to get your money back regardless of the type and className of your airfare.</p>
              </div>
            </div>
            <div class="services col-50  cm-flex">
              <div class="col-50">
                <img src={require("../../assets/images/new/4m.png")} alt="" />
              </div>
              <div class="col-50 text">
                <h3>Alter the Incorrect Name on The Ticket</h3>
                <p>It is viable to alter the misspelt name on your flight ticket already issued with the quick assistance of our travel representatives.</p>
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
          <div className="flex">
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
                    <p>FlightTripCharge made booking my recent trip a breeze! The website's user-friendly interface allowed me to quickly search for flights, compare prices, and select the best options for my travel needs. I appreciated the transparent pricing and the ability to customize my itinerary easily. The booking process was efficient, and I received my e-tickets promptly. I'll definitely be using FlightTripCharge for my future travel plans. Highly recommended!</p>
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
                    <p>I've been using FlightTripCharge for quite some time now, and I've always been impressed with their competitive flight prices. Recently, I encountered a minor issue with my booking, but their customer support team was incredibly responsive and resolved it swiftly. The website offers a wide range of flight options, and the filters make it easy to find the perfect flight for your budget and schedule. The only reason I didn't give it a full 5 stars is that I wish they had a more extensive selection of international airlines. Nevertheless, it's still my go-to platform for domestic travel.</p>
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
                    <p>FlightTripCharge is my trusted companion for booking flights. The website's reliability and convenience are second to none. It's become my one-stop-shop for all things related to air travel. I appreciate the real-time updates on flight availability and prices, which have saved me money on several occasions. The booking process is straightforward, and I love the option to store my frequent flyer details for a seamless experience. Whether I'm planning a last-minute getaway or a well-organized trip, FlightTripCharge has never let me down. I highly recommend it to fellow travelers!</p>
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
