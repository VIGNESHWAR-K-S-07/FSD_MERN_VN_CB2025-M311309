import React from "react";
import { Link } from "react-router-dom";
import "../components-css/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="About">
          <h2 className="h2">
            Howard Institute of Technology<span className="underline"></span>
          </h2>

          <p>
            Howard Institute of Technology is a premier center of learning,
            fostering innovation and excellence in engineering and technology.
            With state‑of‑the‑art facilities, distinguished faculty, and a
            vibrant campus life, it empowers students to achieve global success.
            Dedicated to research, creativity, and holistic growth, HIT shapes
            bright minds into leaders ready to transform the future.
          </p>
        </div>
        <div className="Quick-Links">
          <h2 className="h2">
            Quick Links<span className="underline"></span>
          </h2>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/departments"}>Departments</Link>
          </li>
          <li>
            <Link to={"/why-hit"}>Why choose HIT?</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </div>
        <div className="Courses">
          <h2 className="h2">
            Course<span className="underline"></span>
          </h2>
          <li>B.E</li>
          <li>M.E</li>
          <li>B.Tech</li>
          <li>M.Tech</li>
          <li>BBA</li>
          <li>MBA</li>
        </div>
        <div className="Contact">
          <h2 className="h2">
            Contact<span className="underline"></span>
          </h2>
          <p>
            <span>📍 </span>Howard Institute of Technology, Innovation Avenue,
            Knowledge Park, Coimbatore - 657022. Tamilnadu, India.
          </p>
          <span>☎ </span>
          <span>+91 98 777 66 555, +91 98 777 77 777</span>
          <p>
            <span>💌 </span>
            <a href="@mailto info@hit.ca.in" id="mail">
              info@hit.ca.in
            </a>
          </p>
        </div>
      </div>
      <div className="copyRight">
        <hr />
        <div className="copy-container">
          <p>Copyright &copy; 2025 Howard Insitute of Technology</p>
          {/* <p> Developed and maintained by SD Tech solutions pvt</p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
