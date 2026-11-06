import React from "react";
import "./services.css";

const Services=()=> {
  return (
    <>
    <section className="services-section" id="services">

      <div className="services-heading">
        <h1>
          We Provide The Best Services With Our Developers
        </h1>
        <p>
          We provide professional digital solutions to grow your business.
        </p>
      </div>

      <div className="services-container">

        <div className="service-card">
          <div className="service-icon"><i class="fa-solid fa-bullhorn"></i></div>
          <h2>Digital Marketing</h2>
          <p>
           Web design services comprise the process of user interface  (UI) and user experience (UX) design of any web-based solution.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon"><i class="fa-solid fa-code"></i></div>
          <h2>Web Development</h2>
          <p>
           The Digital Impacts have compiled a list of the best digital marketing companies in the world.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon"><i class="fa-solid fa-palette"></i></div>
          <h2>Graphics Designing</h2>
          <p>
            Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search querie.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon"><i class="fa-solid fa-pen-nib"></i></div>
          <h2>Content Writer</h2>
          <p>
           Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
          <h2>SEO</h2>
          <p>
            That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media.
          </p>
        </div>

      </div>

    </section>
    </>
  );
}

export default Services;