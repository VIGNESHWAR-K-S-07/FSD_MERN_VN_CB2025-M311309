import React from "react";
import data from "../assets/data.json";
const UploadData = () => {
  return (
    <div>
      {data.map((p, i) => (
        <div key={i}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default UploadData;
