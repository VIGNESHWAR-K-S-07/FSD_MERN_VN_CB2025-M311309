import React from "react";
import "../components-css/achievements.css";
import image1 from "../assets/Achievement_1.png";
import image2 from "../assets/Achievement_2.jpg";
import image3 from "../assets/Achievement_3.jpg";
const Achievements = () => {
  return (
    <div className="Achievement-Container">
      <h2>
        <span className="icon">🏆</span>Achievements & Campus Culture
      </h2>
      <div className="Achievements-container">
        <div className="Achievement">
          <div className="achievement-image">
            <img src={image1} alt="Academic excellence" loading="lazy" />

            <h4>
              Academic excellence, winning national awards for research and
              innovation.
            </h4>
          </div>
          <p>
            HIT has consistently been recognized for its academic excellence,
            winning national awards for research and innovation. Our students
            have represented the institute in international conferences,
            hackathons, and cultural festivals, bringing home accolades that
            highlight both their intellect and creativity.
          </p>
        </div>
        <div className="Achievement">
          <div className="achievement-image">
            <img src={image2} alt="" loading="lazy" />
          </div>
          <h4>National Robotics Championship Winner</h4>
          <p>
            Howard Institute of Technology’s robotics team secured first place
            at the National Robotics Championship, showcasing innovation,
            teamwork, and technical excellence. Their autonomous robot impressed
            judges with precision and creativity, earning recognition among top
            engineering colleges. This victory highlights HIT’s commitment to
            nurturing talent and advancing cutting‑edge technology.
          </p>
        </div>
        <div className="Achievement">
          <div className="achievement-image">
            <img src={image3} alt="" loading="lazy" />
          </div>
          <h4>International Research Publication</h4>
          <p>
            A group of HIT students published groundbreaking research in an
            international journal on artificial intelligence applications in
            healthcare. Their work demonstrated how machine learning can improve
            patient diagnostics and treatment efficiency. This achievement
            reflects HIT’s dedication to academic excellence, global
            collaboration, and impactful contributions to society through
            research.
          </p>
        </div>
        {/* <div className="Achievement"><div className="achievement-image">
            <img src={image1} alt="" loading="lazy" />
          </div>
          <p>
            
          </p></div>
            <div className="Achievement"><div className="achievement-image">
            <img src={image1} alt="" loading="lazy" />
          </div>
          <p>
            
          </p></div> */}
      </div>
    </div>
  );
};

export default Achievements;
