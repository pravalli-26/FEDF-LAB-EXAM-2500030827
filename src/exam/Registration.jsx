import React, { useState } from "react";
import "./style.css";

function Registration() {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    department: "",
    email: "",
    gender: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully");

    setStudent({
      name: "",
      age: "",
      department: "",
      email: "",
      gender: ""
    });
  };

  return (

    <div className="form-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={student.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
        />

        <div className="gender">

          Gender:

          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          /> Female

        </div>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Registration;
