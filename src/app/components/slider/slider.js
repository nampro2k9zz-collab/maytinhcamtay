'use client'
import React, { useEffect, useState } from "react";

export default function SimpleSlider({ images, selectedColor, onSelectColor }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !images || images.length === 0) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <p style={{ fontSize: "14px", marginBottom: "10px", color: "#aaa", fontWeight: "500" }}>
        Chọn màu sắc:
      </p>
      
      {/* Thanh Slider bằng CSS Flexbox */}
      <div 
        style={{ 
          display: "flex", 
          gap: "12px", 
          overflowX: "auto", 
          paddingBottom: "10px",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {images.map((item, index) => {
          const isActive = item.color === selectedColor;
          return (
            <div
              key={index}
              onClick={() => onSelectColor(item.color)}
              style={{
                border: isActive ? "2px solid #ff4d4f" : "1px solid #333",
                borderRadius: "10px",
                padding: "10px 14px",
                cursor: "pointer",
                background: isActive ? "rgba(255, 77, 79, 0.1)" : "#161616",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "130px",
                flexShrink: 0,
                transition: "all 0.2s ease",
                userSelect: "none"
              }}
            >
              {/* Ảnh thu nhỏ */}
              <div style={{ width: "35px", height: "35px", background: "#fff", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", padding: "2px" }}>
                <img 
                  src={item.src} 
                  alt={item.color} 
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                />
              </div>

              {/* Tên màu */}
              <span style={{ fontSize: "13px", color: isActive ? "#ff4d4f" : "#fff", fontWeight: isActive ? "bold" : "normal" }}>
                {item.color}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}