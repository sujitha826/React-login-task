import Button from "../components/Button";
import Input from "../components/Input.js";
import "../css/RegisterStyle.css";
import { validateEmail, validatePassword } from "../validators/validateInputs";
import React, { useState } from "react";

function Register() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    gender: "",
    dept: "Web",
    role: "User",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = () => {
    if (
      formInput.email === "" ||
      formInput.password === "" ||
      formInput.name === ""
    )
      return alert(
        "Name, email and password are mandatory...please fill all 3 fields"
      );
    if (!validateEmail(formInput.email)) return alert("Email is invalid");
    if (!validatePassword(formInput.password))
      return alert(
        "Password should contain atleast one alphabet and one digit and contain minimum 8 total chars"
      );
    if (!(formInput.password === formInput.confirmPassword))
      return alert("Password and Confirm Password does not match.");

    console.log(JSON.stringify(formInput));
    return alert("Successfully submitted registration");
  };

  return (
    <div className="centerbox">
      <h2>Register Here</h2>
      <div className="field_input">
        <Input
          name="name"
          title="Full Name"
          type="text"
          placeholder="Enter your Full Name"
          onChange={handleInputChange}
          value={formInput.name}
          required
        />
        <Input
          title="Email"
          type="text"
          name="email"
          placeholder="Enter your Email ID"
          onChange={handleInputChange}
          value={formInput.email}
          required
        />

        <div> <label>
          Gender:
          <input type="radio" value="Male" name="gender" onChange={(e) => handleInputChange(e)} /> Male
          <input type="radio" value="Female" name="gender" onChange={(e) => handleInputChange(e)} /> Female
        </label></div>

        <div>
          <label>
            Department:
            <select
              style={{ padding: "5px", marginTop: "10px" }}
              value={formInput.dept}
              onChange={(e) => handleInputChange(e)}
              name="dept"
            >
              <option value="Web">Web</option>
              <option value="Platform">Platform</option>
              <option value="Middleware">Middleware</option>
              <option value="Product Delivery">Product Delivery</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Role:
            <select
              style={{ padding: "5px", marginTop: "10px" }}
              value={formInput.role}
              onChange={(e) => handleInputChange(e)}
              name="role"
            >
              <option value="admin">
                admin
              </option>
              <option value="user">user</option>
            </select>
          </label>
        </div>

        <Input
          title="Password"
          type="password"
          name="password"
          onChange={handleInputChange}
          value={formInput.password}
          placeholder="Enter Password"
        />

        <Input
          title="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleInputChange}
          value={formInput.confirmPassword}
          placeholder="Confirm Password"
        />

        <div style={{ marginTop: "10px" }}>
          <Button onClick={handleSubmitForm} title="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
