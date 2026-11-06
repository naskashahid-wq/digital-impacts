import React from "react";
import "./portfolio.css";
import USA from "../../../assets/USA Flag.jpg";
import UK from "../../../assets/UK Flag.jpg";
import CANADA from "../../../assets/Canada Flag.jpg";

const  Portfolio=()=> {
  return (
    <section className="portfolio-section" id="portfolio">

      <div className="portfolio-container">
        <div className="portfolio-left">

          <div className="portfolio-map">
            <iframe
              src="https://maps.google.com/maps?q=Todmorden%2C%20UK&t=&z=12&ie=UTF8&iwloc=&output=embed"
              title="Google Map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div className="portfolio-contact-details">

            <div className="portfolio-phone">
              <i className="fa-solid fa-phone"></i>

              <div>
                <p>+447424997026</p>
                <p>+447900190002</p>
              </div>
            </div>

            <div className="portfolio-email">
              <i className="fa-solid fa-envelope"></i>

              <p>info@thedigitalimpacts.com</p>
            </div>

          </div>

        </div>
        <div className="portfolio-form">

          <form onSubmit>

            <label>Name</label>
            <input
              type="text"
              placeholder="your name"
            />

            <label>Surname</label>
            <input
              type="text"
              placeholder="your surname"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="your email address"
            />

            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="123-45-678"
            />

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </div>
      <div className="portfolio-bottom">

        <div className="portfolio-line"></div>

        <h1>Let's Work Together</h1>

        <p>
          Driving your business forward with strong marketing strategies
          <br />
          Get a free consultation to make this happen!
        </p>

        <button className="portfolio-connect">
          Connect
        </button>

      </div>
       <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-column">
          <h3>COMPANY</h3>

          <ul>
            <li>About Us</li>
            <li>Why Choose Us</li>
            <li>Team</li>
            <li>Pricing & Plans</li>
            <li>Contacts</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>

          <ul>
            <li>Web Design & Development</li>
            <li>Why Choose Us</li>
            <li>Specialized SEO Services</li>
            <li>Specialized Social Services</li>
            <li>Specialized Graphics Services</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-column footer-resources">
          <h3>RESOURCES</h3>

          <ul>
            <li>Portfolio</li>
            <li>Terms of Services</li>
            <li>Help & FAQ</li>
            <li>Contact Us</li>
            <li>Site map</li>
          </ul>

          <button className="follow-button">
            Follow Us
          </button>

          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>

      </div>
      <div className="footer-countries">

        <div className="country-box">
            <img src={USA} alt="USA" />

          <h4>USA :</h4>
          <p>1st Avenue, SW, Hickory,NC, USA</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </div>

        <div className="country-box">
           <img src={UK} alt="UK" />

          <h4>UK :</h4>
          <p>Oldham Greater Manchester, United Kingdom</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </div>

        <div className="country-box">
            <img src={CANADA} alt="CANADA" />

          <h4>CANADA :</h4>
          <p>92 Avenue, Surrey, BC, Canada</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </div>

      </div>
      <div className="footer-bottom">

        <hr />

        <p>
          Copyright © 2022 The Digital Impacts. All rights reserved
        </p>

      </div>

    </footer>

    </section>

  );
}

export default Portfolio;
