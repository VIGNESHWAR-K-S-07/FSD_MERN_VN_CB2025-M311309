import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/departmentData.json";
import "../components-css/departmentDetailPage.css";

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = data.find((d) => d.id === id);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!dept) return <p>Department not found</p>;

  return (
    <div className="dept-detail">
      <h2>{dept.name}</h2>
      <p className="tagline">{dept.tagline}</p>
      <p className="description">{dept.description}</p>

      <h3>🎓 Courses Offered</h3>
      <ul className="course">
        {dept.courses.map((course, i) => (
          <li key={i}>{course}</li>
        ))}
      </ul>

      <h3>🧑‍🏫 Faculty Highlights</h3>
      <ul className="faculty">
        {dept.faculty.map((prof, i) => (
          <li key={i}>{prof}</li>
        ))}
      </ul>

      <h3>🧪 Facilities</h3>
      <ul className="facility">
        {dept.facilities.map((facility, i) => (
          <li key={i}>{facility}</li>
        ))}
      </ul>
      <div className="button-container">
        <button
          className="apply-btn"
          onClick={() =>
            navigate(`/contact?dept=${encodeURIComponent(dept.name)}`)
          }
        >
          Apply Now
        </button>
        <button className="apply-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetail;
