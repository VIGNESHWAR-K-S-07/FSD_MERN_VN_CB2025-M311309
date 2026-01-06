import React from "react";
import data from "../assets/departmentData.json";
import "../components-css/department_card.css";
import { Link, Route } from "react-router-dom";
const Department = () => {
  return (
    <div className="dep-container">
      {data.map((item, index) => (
        <div key={index} className="Card">
          <span className="dep-icon">{item.icon}</span>
          <p>{item.tagline}</p>
          <h3>{item.name}</h3>
          <Link to={`/departments/${item.id}`}>
            <button>Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Department;
