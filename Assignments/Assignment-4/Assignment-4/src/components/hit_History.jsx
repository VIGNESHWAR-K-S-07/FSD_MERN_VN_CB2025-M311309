import React, { useEffect } from "react";
import "../components-css/hit_History.css";
import Slider from "./slider";
const Hit_History = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Slider />
      <div className="history-container">
        <h2>
          <span className="icon">🏛</span> History
        </h2>
        <div className="History-Desc">
          <div id="image-Container">
            <img src="/hit_campus.png" alt="campus" loading="lazy" />
          </div>
          <div id="Desc-container">
            <p>
              Howard Institute of Technology (HIT) was founded in 1987 with a
              vision to redefine higher education in India. What began as a
              modest institution with just two departments has now blossomed
              into a thriving academic hub with thousands of students from
              across the country. Over the decades, HIT has expanded its campus,
              introduced cutting‑edge programs, and built state‑of‑the‑art
              laboratories. From humble beginnings in a single building, HIT now
              stands as a symbol of progress, innovation, and inclusivity,
              proudly carrying forward its legacy of excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hit_History;
