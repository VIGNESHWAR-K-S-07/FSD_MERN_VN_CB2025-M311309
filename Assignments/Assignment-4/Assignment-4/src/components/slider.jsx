import React, { useEffect, useState, useRef } from "react";
import "../components-css/slider.css";

const Slider = () => {
  const images = ["/hit_campus.png", "/classroom.png", "/Graduation_4K.jpg"];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const goToSlide = (idx) => setCurrent(idx);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="homepage image carousel"
    >
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`slide ${i + 1}`} />
              {/* <div className="caption">Admissions Open 2025</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${current === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={current === i}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
