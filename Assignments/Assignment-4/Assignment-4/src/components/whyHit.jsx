import React, { useEffect } from "react";
import "../components-css/whyHit.css";
const WhyHit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const features = [
    {
      icon: "🎓",
      title: "World-Class Faculty",
      description:
        "Learn from experienced professors and industry experts who guide you to success.",
    },
    {
      icon: "🔬",
      title: "Modern Labs",
      description:
        "Hands-on training with cutting-edge equipment and facilities.",
    },
    {
      icon: "💼",
      title: "Strong Placements",
      description:
        "Top recruiters hire our graduates every year with excellent packages.",
    },
    {
      icon: "🌍",
      title: "Vibrant Campus Life",
      description: "Clubs, events, and opportunities to grow beyond academics.",
    },
  ];
  return (
    <section className="why-college" id="why-hit">
      <h2>Why Choose HIT?</h2>
      <p className="intro">
        At HIT, we prepare students to become leaders in technology and
        innovation.
      </p>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHit;
