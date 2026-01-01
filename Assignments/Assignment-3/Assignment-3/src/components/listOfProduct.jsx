import React from "react";
import { useState } from "react";
const ListOfProduct = () => {
  const products = [
    { name: "TV", category: "Electronics" },
    { name: "Shirt", category: "Clothes" },
  ];
  const [filter, setFilter] = useState("All");
  const shown = products.filter(
    (p) => filter === "All" || p.category === filter
  );
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothes")}>Clothes</button>
      {shown.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
};

export default ListOfProduct;
