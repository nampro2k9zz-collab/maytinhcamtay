'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images = [], selectedColor, onSelectColor }) {
  if (!images || images.length === 0) {
    return null;
  }

  var settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: Math.min(3, images.length),
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div style={{ width: '100%', marginTop: '10px' }}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => onSelectColor && onSelectColor(item.color)}>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '5px',
              border: selectedColor === item.color ? '2px solid #ff4d4f' : '1px solid #ddd',
              transition: 'all 0.3s ease'
            }}>
              <img src={item.src} alt={item.color} style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
            </div>
            <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '11px', color: '#888' }}>{item.color}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}