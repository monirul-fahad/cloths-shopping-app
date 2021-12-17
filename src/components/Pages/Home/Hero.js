import React from "react";
import { Carousel, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    // <Carousel fade>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.shopify.com/s/files/1/0596/1678/8676/files/slide9.jpg?v=1630552997"
    //       alt="First slide"
    //     />

    //     <Carousel.Caption>
    //       <div className="carousel-text">
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </div>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.shopify.com/s/files/1/0596/1678/8676/files/slide4.jpg?v=1630405186"
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.shopify.com/s/files/1/0596/1678/8676/files/slide3.jpg?v=1630374758"
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start banner-text">
            <p className="fs-5 fw-bold text-color">Handmade Basics</p>
            <h1 className="fw-bold mb-4 fs-1 text-black">
              <span className="highlight-text">MODERN</span> & EASY
            </h1>
            <p className="fs-5 fw-bold text-color mb-4">
              Sunglass improves personality and smartness. But You need perfect
              glass to match with you. We've thousands of stylist sunglasses in
              our collection. Choose your glass and be smart.
            </p>
            <h2 className="fs-3 fw-bold text2-color mb-3">
              50% OFF ON WINTER COLLECTIONS
            </h2>
            <button className="btn btn-warning px-3 fw-bold py-2">
              Shop Now{" "}
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
