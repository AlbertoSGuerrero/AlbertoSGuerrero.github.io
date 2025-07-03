import React from 'react';
import Layout from "../../components/Layout";
import "../../styles/global.css";
import "./Homepage.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Sample image URLs (replace with actual images)
const images = [
  { label: "image1", src: "/images/image1.jpg" },
  { label: "image2", src: "/images/image2.jpg" },
  { label: "image3", src: "/images/image3.jpg" },
  { label: "image4", src: "/images/image4.jpg" },
  { label: "image5", src: "/images/image5.jpg" },
  { label: "image6", src: "/images/image6.jpg" },
  { label: "image7", src: "/images/image7.jpg" },
];

const Homepage = () => {
  return (
    <Layout>
      <div className="homepage-container">
        <div>
        <h1>Alberto Guerrero</h1>
        <h3>Mechanical Engineering at The University of Texas at Austin</h3>
        </div>
        <div>
        </div>
        <div>
        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={4} // Show 3 images at a time
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation // Enable navigation arrows
          loop={true} // Enable infinite looping
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          className="mySwiper"
        >
        {images.map(({ label, src }, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-slide">
                <img src={src} alt={label} className="carousel-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <div>
      <h2>Project Gallery</h2>
      <h2>text here</h2>
      <h2>text here</h2>
      <h2>text here</h2>
      <h2>text here</h2>
      <h2>text here</h2>
      <h2>text here</h2>
      </div>

    </Layout>
  );
};

export default Homepage;
