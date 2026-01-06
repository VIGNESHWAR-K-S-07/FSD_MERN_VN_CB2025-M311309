import React, { useEffect, useState } from "react";
import "../components-css/contactForm.css";
import { useLocation, useSearchParams } from "react-router-dom";
const ContactForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedDept = params.get("dept") || "";
  const departments = [
    "Computer Science Engineering",
    "Artificial Intelligence and Data Science",
    "Robotics and Automation",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Business Administration",
  ];
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  },[])

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const [submittedData, setSubmittedData] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setStatus({
        loading: false,
        success: "Form submitted successfully!",
        error: null,
      });
      console.log(formData);
      console.log(payload);
      setSubmittedData(payload);
      e.target.reset();
      setTimeout(() => {
        setStatus({ loading: false, success: null, error: null });
      }, 3000);
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || "Something went wrong. Please try again.",
      });
    }
  }
  return (
    <div className="contact-page">
      <h2>Fill out this form , Our Advicer will contact you shortly!</h2>
      {status.success && <p className="success-msg">{status.success}</p>}
      {status.error && <p className="error-msg">{status.error}</p>}
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name"
            required
            pattern="[A-Za-z\s]{2,50}"
            title="Name should contain only letters and spaces, 2–50 characters."
            placeholder="Enter your name"
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="number"
            id="number"
            required
            pattern="[0-9]{10}"
            placeholder="e.g., 9874651230"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Enter a valid email address (e.g., user@example.com)."
            placeholder="Enter a valid email address (e.g., user@example.com)"
          />
        </label>
        <label>
          Department:
          {selectedDept ? (
            <input
              type="text"
              name="department"
              value={selectedDept}
              readOnly
            />
          ) : (
            <select name="department" required>
              <option value="">-- Select Department --</option>
              {departments.map((dept, i) => (
                <option key={i} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          )}
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            id="location"
            required
            pattern="[A-Za-z\s]{2,50}"
            placeholder="e.g., coimbatore"
          />
        </label>
        <button type="submit" className="submit-btn" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {submittedData && (
        <div className="display-card">
          <h3>Submitted Contact Info</h3>
          <div className="info-row">
            <span className="label">Name:</span>
            <span className="value">{submittedData.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Phone:</span>
            <span className="value">{submittedData.number}</span>
          </div>
          <div className="info-row">
            <span className="label">Email:</span>
            <span className="value">{submittedData.userEmail}</span>
          </div>
          <div className="info-row">
            <span className="label">Department:</span>
            <span className="value">{submittedData.department}</span>
          </div>
          <div className="info-row">
            <span className="label">Location:</span>
            <span className="value">{submittedData.location}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
