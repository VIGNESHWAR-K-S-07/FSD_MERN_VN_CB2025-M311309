import React from "react";
import { useEffect, useState } from "react";
const LoadingPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);
  if (error) return <p>Error loading data</p>;
  if (loading) return <p>Loading...</p>;
  return items.map((p) => <p key={p.id}>{p.title}</p>);
  return <div></div>;
};

export default LoadingPage;
