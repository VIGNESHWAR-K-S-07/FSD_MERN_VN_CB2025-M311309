import React from "react";
import "../components-css/hit_founder.css";
import howardStark from "../assets/howard_stark.png";
const Hit_founder = () => {
  return (
    <div className="founder-container">
      <h2>
        <span className="icon">👨‍✈️</span>Leadership
      </h2>
      <div className="founder">
        <p>
          At the heart of HIT’s success lies its dedicated leadership team.
          Guided by our Founder, Dr. Howard Stark, and supported by an
          experienced Principal, Dr. Ananya Rao. HIT’s leadership emphasizes
          integrity, inclusivity, and academic rigor. Their collective vision
          has shaped HIT into a forward‑thinking institution that embraces
          modern teaching methods while staying rooted in timeless values. The
          leadership’s open‑door policy ensures that students feel heard,
          supported, and inspired to achieve their fullest potential. Their
          commitment extends beyond academics, fostering a culture of
          mentorship, innovation, and holistic development. Regular town halls,
          faculty-student forums, and leadership workshops empower students to
          become confident, ethical leaders of tomorrow.
        </p>
        <div className="founder-img-container">
          <img
            src={howardStark}
            alt="founder-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hit_founder;
