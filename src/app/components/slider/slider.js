"use client";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images = [], onSelectColor, selectedColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const isUpdatingRef = useRef(false);

  // Cập nhật index khi selectedColor thay đổi
  useEffect(() => {
    if (images.length && !isUpdatingRef.current) {
      const index = images.findIndex(item => item.color === selectedColor);
      if (index !== -1 && index !== currentIndex) {
        isUpdatingRef.current = true;
        setCurrentIndex(index);
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
        setTimeout(() => {
          isUpdatingRef.current = false;
        }, 100);
      }
    }
  }, [selectedColor, images]);

  // Tự động chạy
  useEffect(() => {
    if (!images.length || images.length <= 1) return;
    
    const timer = setInterval(() => {
      if (!isUpdatingRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        isUpdatingRef.current = true;
        setCurrentIndex(nextIndex);
        if (onSelectColor) {
          onSelectColor(images[nextIndex].color);
        }
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(nextIndex);
        }
        setTimeout(() => {
          isUpdatingRef.current = false;
        }, 100);
      }
    }, 2000);
    
    return () => clearInterval(timer);
  }, [images, onSelectColor, currentIndex]);

  if (!images || images.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>Không có ảnh</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, images.length),
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      {/* ẢNH LỚN */}
      <div style={{
        borderRadius: '12px',
        background: '#fff',
        padding: '20px',
        textAlign: 'center',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.color}
          style={{
            maxWidth: '100%',
            maxHeight: '180px',
            objectFit: 'contain'
          }}
          onError={(e) => {
            e.target.src = "/placeholder.jpg";
          }}
        />
      </div>

      {/* 3 ẢNH NHỎ */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '15px' }}>
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (!isUpdatingRef.current) {
                isUpdatingRef.current = true;
                setCurrentIndex(index);
                if (onSelectColor) onSelectColor(item.color);
                if (sliderRef.current) sliderRef.current.slickGoTo(index);
                setTimeout(() => {
                  isUpdatingRef.current = false;
                }, 100);
              }
            }}
            style={{ cursor: 'pointer', textAlign: 'center', width: '80px' }}
          >
            <div style={{
              border: currentIndex === index ? '2px solid #ff4d4f' : '1px solid #ddd',
              borderRadius: '8px',
              padding: '4px',
              background: '#fff',
              transition: 'all 0.3s ease'
            }}>
              <img
                src={item.src}
                alt={item.color}
                style={{ width: '100%', height: '60px', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
            <p style={{
              fontSize: '11px',
              marginTop: '5px',
              color: currentIndex === index ? '#ff4d4f' : '#888',
              fontWeight: currentIndex === index ? 'bold' : 'normal'
            }}>
              {item.color}
            </p>
          </div>
        ))}
      </div>

      {/* Thanh trượt */}
      <div style={{ padding: '0 10px', marginTop: '10px' }}>
        <input
          type="range"
          min="0"
          max={images.length - 1}
          step="1"
          value={currentIndex}
          onChange={(e) => {
            if (!isUpdatingRef.current) {
              const newIndex = parseInt(e.target.value);
              isUpdatingRef.current = true;
              setCurrentIndex(newIndex);
              if (onSelectColor) onSelectColor(images[newIndex].color);
              if (sliderRef.current) sliderRef.current.slickGoTo(newIndex);
              setTimeout(() => {
                isUpdatingRef.current = false;
              }, 100);
            }
          }}
          style={{
            width: '100%',
            height: '4px',
            borderRadius: '5px',
            background: `linear-gradient(90deg, #ff4d4f ${(currentIndex / (images.length - 1)) * 100}%, #ddd ${(currentIndex / (images.length - 1)) * 100}%)`,
            outline: 'none',
            cursor: 'pointer',
            WebkitAppearance: 'none',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {images.map((item, idx) => (
            <span
              key={idx}
              onClick={() => {
                if (!isUpdatingRef.current) {
                  isUpdatingRef.current = true;
                  setCurrentIndex(idx);
                  if (onSelectColor) onSelectColor(item.color);
                  if (sliderRef.current) sliderRef.current.slickGoTo(idx);
                  setTimeout(() => {
                    isUpdatingRef.current = false;
                  }, 100);
                }
              }}
              style={{
                fontSize: '11px',
                color: currentIndex === idx ? '#ff4d4f' : '#888',
                cursor: 'pointer',
                fontWeight: currentIndex === idx ? 'bold' : 'normal'
              }}
            >
              {item.color}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}