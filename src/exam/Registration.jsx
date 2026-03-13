import React, { useState } from "react";

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

    alert("Student Registered");

    setStudent({
      name: "",
      age: "",
      department: "",
      email: "",
      gender: ""
    });
  };

  return (
    <div>

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br/>

        <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br/>

        <input type="text" name="department" placeholder="Department" onChange={handleChange} /><br/>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br/>

        <br/>

        Gender<br/>
        <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male<br/>
        <input type="radio" name="gender" value="Female" onChange={handleChange}/> Female<br/>

        <br/>

        <button type="submit">Register</button><br/>

      </form>

    </div>
  );
}

export default Registration;
