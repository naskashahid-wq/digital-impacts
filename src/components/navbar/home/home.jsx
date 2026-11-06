import React from "react";
import "./home.css";
import HomeImage from "../../../assets/Home-Image.jpg";

const Home=()=> {
  return (
    <>
    <section className="home-section" id="home">

      <div className="home-content">

        <div className="home-image">
          <img src={HomeImage} alt="HomeImage" />
        </div>

        <div className="home-text">

          <h1>
            We are full Services
            <br />
            <span>Digital Marketing Agency</span>
          </h1>

          <h2>Welcome to the Digital Impacts</h2>

          <hr />

          <p>
            We partner with our clients with a team of professionals,
            we are able to provide the best on our side. We strive to
            be leaders in digital marketing services worldwide
            by revolutionizing the industry and setting new standards
            of professionalism and success.
          </p>

          <div className="message-button">
            <button>Message Us Now</button>
          </div>

        </div>

      </div>

      <div className="home-bottom-heading">
        <h2>
          We <span>Provide</span> The Best
          <br />
          Services With <span>Our</span>
          <br />
          <span>Developers</span>
        </h2>
      </div>

    </section>
    </>
  );
}

export default Home;
