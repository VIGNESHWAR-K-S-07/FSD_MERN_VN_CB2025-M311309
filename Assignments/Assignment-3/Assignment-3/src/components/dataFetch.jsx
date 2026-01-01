import React from "react";
import { useEffect, useState } from "react";
const DataFetch = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, []);
  return (
    <div>
      {items.map((p) => (
        <p key={p.id}>
          {p.title} - {p.price} - {p.brand}
        </p>
      ))}
    </div>
  );
};

export default DataFetch;
