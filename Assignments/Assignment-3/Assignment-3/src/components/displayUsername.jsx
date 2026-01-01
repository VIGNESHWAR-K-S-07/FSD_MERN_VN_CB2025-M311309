import React from "react";
import { useState } from "react";
const DisplayUsername = () => {
  const [Name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="Username" />
      <h2>{Name}</h2>
    </div>
  );
};

export default DisplayUsername;
