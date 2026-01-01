import React from 'react'

const StudentsDetail = () => {
    const students = [
      { name: "Viki", dept: "CSE", year: 3 },
      { name: "Sam", dept: "IT", year: 2 },
      { name: "Alex", dept: "ECE", year: 1 },
    ];
  return (
    <div>
      {students.map((s, i) => (
        <div key={i} className="card">
          <h3>{s.name}</h3>
          <p>
            {s.dept} - Year {s.year}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudentsDetail
