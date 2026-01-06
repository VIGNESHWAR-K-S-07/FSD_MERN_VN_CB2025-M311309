import React from 'react'
import "../components-css/hit_vision&Mission.css"


const Hit_vision_Mission = () => {
  return (
    <div className="vision-container">
      <h2>
        <span className="icon">🎯</span>Mission & Vision
      </h2>
      <div className="visionANDmission">
        <div className="mission">
          <h3>Mission</h3>
          <p>
            Our mission at HIT is to empower students with knowledge,
            creativity, and critical thinking skills that prepare them to face
            the challenges of tomorrow. We strive to cultivate a learning
            environment that values curiosity, collaboration, and compassion.
          </p>
        </div>
        <hr/>
        <div className="vision">
          <h3>Vision</h3>
          <p>
            We envision HIT as a global leader in education, research, and
            innovation. Our goal is to nurture graduates who not only excel in
            their chosen fields but also contribute meaningfully to society,
            driving positive change and sustainable growth worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hit_vision_Mission
