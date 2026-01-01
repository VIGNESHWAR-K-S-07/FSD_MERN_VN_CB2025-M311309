import React from "react";
import { useState } from "react";
const students = ["Viki", "Sam", "Alex"];
const SearchBar = () => {
  const [q, setQ] = useState("");
  return (
    <div>
      <input onChange={(e) => setQ(e.target.value)} placeholder="Search" />
      {students
        .filter((s) => s.toLowerCase().includes(q.toLowerCase()))
        .map((s, i) => (
          <p key={i}>{s}</p>
        ))}
    </div>
  );
};

export default SearchBar;
