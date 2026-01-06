import React, { useEffect } from "react";
import Department from "../components/department_card";

const DepartmentPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <h2>Departments</h2>
      <Department />
    </div>
  );
};

export default DepartmentPage;
