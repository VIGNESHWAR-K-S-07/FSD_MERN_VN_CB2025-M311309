import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Electronics() {
  return <h3>Electronics Products</h3>;
}
function Fashion() {
  return <h3>Fashion Products</h3>;
}
function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <nav>
        <Link to="electronics">Electronics</Link> |
        <Link to="fashion">Fashion</Link>
      </nav>
      <Routes>
        <Route path="electronics" element={<Electronics />} />
        <Route path="fashion" element={<Fashion />} />
      </Routes>
    </div>
  );
}
const AddProductPage = () => {
  return (
    <div>
      <h2>products</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AddProductPage;
