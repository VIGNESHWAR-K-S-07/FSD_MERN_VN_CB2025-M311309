import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}
function Products() {
  return <h2>Products Page</h2>;
}

const ThreePageApp = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ThreePageApp
