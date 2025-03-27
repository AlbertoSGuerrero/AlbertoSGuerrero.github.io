import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import "../../styles/global.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Sample image URLs (replace with actual images)
const images = [
  { label: "🥭", color: "#EF2F88" },
  { label: "🍎", color: "#3EDBF0" },
  { label: "🍉", color: "#B983FF" },
  { label: "🍇", color: "#FF87CA" },
  { label: "🍊", color: "#F8F0DF" }
];

const Homepage = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
  };


  return (
    <Layout>
      <div className="homepage-container">
        <h1>Home</h1>
        <div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={3} // Show 3 images at a time
          spaceBetween={20} // Space between slides
          pagination={{ clickable: true }}
          navigation // Enable navigation arrows
          loop={true} // Enable infinite looping
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map(({ label, color }, index) => (
            <SwiperSlide key={index}>
              <div className="emoji-slide" style={{ backgroundColor: color }}>
                {label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </Layout>
  );
};

export default Homepage;
