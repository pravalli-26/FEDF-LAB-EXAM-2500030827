import React, { useEffect, useState } from "react";

function ViewStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("students")) || [];

    setStudents(data);

  }, []);

  return (
    <div>

      <h2>Student List</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>

          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.department}</td>
              <td>{s.email}</td>
              <td>{s.gender}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ViewStudents;

