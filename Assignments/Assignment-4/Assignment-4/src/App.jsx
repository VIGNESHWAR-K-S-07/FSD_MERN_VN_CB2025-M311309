import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import AboutPage from "./pages/aboutPage";
import DepartmentPage from "./pages/departmentPage";
import DepartmentDetail from "./components/departmentDetailPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 id="heading">Start Your Career in HIT!🚀</h1>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-hit?" element={<HomePage />} />
          <Route path="/departments" element={<DepartmentPage />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
