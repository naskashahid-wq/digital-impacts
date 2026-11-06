import React from "react";
import "./about.css";
import Estate from "../../../assets/Estate.jpg";
import Education from "../../../assets/Education.jpg";
import Health from "../../../assets/Health-Care.jpg";
import Hospitality from "../../../assets/Hospitality.jpg";
import Commerce from "../../../assets/Commerce.jpg";
import Fintech from "../../../assets/Fintech.jpg";
import Revive from "../../../assets/Revive.jpg";
import Voeux from "../../../assets/Voeux.jpg"
import Kingz from "../../../assets/The Kingz.jpg"
import Unifresh from "../../../assets/Unifresh.jpg"

function About() {
  return (
    <>
      <center>
        <h1 style={{ fontSize: "40px" }}>Industries We</h1>
        <h2 style={{ color: "#079bd5", fontSize: "30px" }}>Work With</h2>
      </center>
      <div className="small-cards">
        <div>
          <img src={Estate} alt="Estate" />
          <p style={{ fontSize: "20px" }}>Real Estate</p>
        </div>
        <div>
          <img src={Education} alt="Education" />
          <p style={{ fontSize: "20px" }}>Education</p>
        </div>
        <div>
          <img src={Health} alt="Health-care" />
          <p style={{ fontSize: "20px" }}>Health-Care</p>
        </div>
        <div>
          <img src={Hospitality} alt="Hospitality" />
          <p style={{ fontSize: "20px" }}>Hospitality</p>
        </div>
        <div>
          <img src={Commerce} alt="Commerce" />
          <p style={{ fontSize: "20px" }}>Commerce</p>
        </div>
        <div>
          <img src={Fintech} alt="Fintech" />
          <p style={{ fontSize: "20px" }}>Fintech</p>
        </div>
      </div>
      <p className="p">EVERYTHING YOU NEED TO KNOW ABOUT</p>
      <center>
        <h1 style={{ color: "#079bd5", fontSize: "30px" }} className="h1">
          THE DIGITAL IMPACTS
        </h1>
        <p className="para">
          The <b>Digital Impacts</b> create a perfect company for its customers.
         <b> Digital Impacts</b> offers the best services to ensure your business
          thrives online. Because we partner with our clients with a team of
          professionals, we can to <br /> provide the best on our side. We
          strive to be leaders in digital marketing services worldwide by
          revolutionizing the industry and setting new standards of
          professionalism and success.
        </p>
        <h1 style={{ color: "#079bd5", fontSize: "30px" }} className="h1">
          OUR VISION
        </h1>
        <p className="para">
          We strive to be leaders in digital marketing services across the world
          by revolutionizing the industry and setting new standards of
          professionalism and success. Our vision is to become a top agency
          offering online <br /> marketing strategies, digital sales solutions,
          and internet brand management in the international business sphere.
        </p>
        <h1 style={{ color: "#079bd5", fontSize: "30px" }} className="h1">
          OUR MISSION
        </h1>
        <p className="para">
          Our mission is to partner with customers for their success as we
          create diverse client base including companies and individuals
          functioning in many different fields and economies. We will be best in
          providing consistently <br /> successful, unique, and forward-thinking
          digital marketing solutions that take into account the individual
          requirements and unique demands of each client.
        </p>
      </center>

      <div class="stats-container">
        <div class="stat-box dark-blue">
          <span class="number">10000+</span>
          <span class="label">Domain Names Registered</span>
        </div>
        <div class="stat-box light-blue">
          <span class="number">90000+</span>
          <span class="label">Websites Hosted</span>
        </div>
        <div class="stat-box light-gray">
          <span class="number">45000+</span>
          <span class="label">Customers</span>
        </div>
      </div>
      <p className="p">Projects We've Deliverd</p>
      <p className="para1">
        Over the past 10 years, we have designed and built a wide range of
        high-quality products from scratch. Our team has finished various web
        and mobile apps related to various spheres including e-learning,
        healthcare,
        <br /> e-commerce, advertising, augmented reality, action sports,
        finance and sharing economy.
      </p>
      <div className="main-container">
        <div className="left-section">
          <span className="industry-tag">INDUSTRY</span>
          <h1 className="main-title">REVIVE</h1>
          <p className="sub-title">Revive Beauty Salon & Institute</p>

          <div className="services-list">
            <div className="service-item">
              <div className="icon-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <span className="service-text">WEB DEVELOPMENT</span>
            </div>
            <div className="service-item">
              <div className="icon-box">
                <i className="fa-solid fa-atom"></i>
              </div>
              <span className="service-text">QUALITY ASSURANCE</span>
            </div>
          </div>
          <div className="aws-logo">
            <i className="fa-brands fa-aws"></i>
          </div>
        </div>
        <div className="right-section">
        <img src={Revive} alt="Revive" />
        </div>
      </div>
     <div className="lt-box">
            <div className="lt-pic-side">
               <img src={Voeux} alt="Voeux" />
            </div>
            <div className="lt-info-side">
                <span>INDUSTRY</span>
                <h1>Voeux</h1>
                <p>Natural Skin Care</p>

                <div className="lt-list">
                    <div>
                        <div className="lt-icon"><i className="fa-solid fa-code"></i></div>
                        <span>WEB DEVELOPMENT</span>
                    </div>
                    <div>
                        <div className="lt-icon"><i className="fa-solid fa-atom"></i></div>
                        <span>QUALITY ASSURANCE</span>
                    </div>
                </div>

                <div className="lt-brands">
                    <i className="fa-brands fa-aws aws-dark"></i>
                </div>
            </div>

        </div>
         <div className="main-container">
        <div className="left-section">
          <span className="industry-tag">INDUSTRY</span>
          <h1 className="main-title">KINGZ</h1>
          <p className="sub-title">E-Commerce</p>

          <div className="services-list">
            <div className="service-item">
              <div className="icon-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <span className="service-text">WEB DEVELOPMENT</span>
            </div>
            <div className="service-item">
              <div className="icon-box">
                <i className="fa-solid fa-atom"></i>
              </div>
              <span className="service-text">QUALITY ASSURANCE</span>
            </div>
          </div>
          <div className="aws-logo">
            <i className="fa-brands fa-aws"></i>
          </div>
        </div>
        <div className="right-section">
        <img src={Kingz} alt="Kingz" />
        </div>
      </div>
      <div className="lt-box">
            <div className="lt-pic-side">
               <img src={Unifresh} alt="Unifresh" />
            </div>
            <div className="lt-info-side">
                <span>INDUSTRY</span>
                <h1>Unifresh</h1>
                <p>Fruits and Vegetables Retail Store</p>

                <div className="lt-list">
                    <div>
                        <div className="lt-icon"><i className="fa-solid fa-code"></i></div>
                        <span>WEB DEVELOPMENT</span>
                    </div>
                    <div>
                        <div className="lt-icon"><i className="fa-solid fa-atom"></i></div>
                        <span>QUALITY ASSURANCE</span>
                    </div>
                </div>

                <div className="lt-brands">
                    <i className="fa-brands fa-aws aws-dark"></i>
                </div>
            </div>

        </div>
        <section className="Feel">
            <h1>Feel Free To Contact Us By Submitting</h1>
            <h1  style={{ color: "#079bd5" }}>Form Or Contact Live Support</h1>
        </section>
    </>
  );
}

export default About;
