import { validateEmail, validatePassword, validatePhone } from "../validators/validateInputs";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input.js";
import "../css/RegisterStyle.css";

function Register() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dept: "Web",
    role: "user",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();                   //  used to navigate to new URL(page)

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
      formInput.name === "" ||
      formInput.phone === ""
    )
      return alert(
        "Name, email, phone and password are mandatory...please fill all 3 fields"
      );
    if (!validateEmail(formInput.email)) return alert("Email is invalid");

    if (!validatePhone(formInput.phone))
      return alert("Please enter a valid phone number");

    if (!validatePassword(formInput.password))
      return alert(
        "Password should contain atleast one alphabet,one digit and minimum 8 total chars"
      );
    if (!(formInput.password === formInput.confirmPassword))
      return alert("Password and Confirm Password do not match.");

    console.log("User Inputs - " + JSON.stringify(formInput));

    const usersAll = JSON.parse(localStorage.getItem("usersAll"));
    if (!usersAll) {
      const usersData = [{ ...formInput }];
      localStorage.setItem("usersAll", JSON.stringify(usersData));             
    }
    else {
      const isUserExisting = usersAll.find(
        (user) => user.email === formInput.email
      );
      if (isUserExisting) {
        // navigate("/");
        return alert("User already exists try login once");               //  needs to check this alert
      }
      const usersData = [...usersAll, formInput];
      localStorage.setItem("usersAll", JSON.stringify(usersData));
      navigate("/");
    }
    // return alert("Successfully submitted registration");
  };

  return (
    <div className="register_form">
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
          type="email"
          name="email"
          placeholder="Enter your Email ID"
          onChange={handleInputChange}
          value={formInput.email}
          required
        />

        <Input
          title="Phone"
          type="text"
          name="phone"
          placeholder="Enter your phone"
          onChange={handleInputChange}
          value={formInput.phone}
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
              style={{ padding: "5px", marginTop: "10px" , marginRight :"10px", marginLeft :"5px"}}
              value={formInput.dept}
              onChange={(e) => handleInputChange(e)}
              name="dept"
            >
              <option value="Web" defaultChecked>Web</option>
              <option value="Platform">Platform</option>
              <option value="Middleware">Middleware</option>
              <option value="Product Delivery">Product Delivery</option>
            </select>
          </label>

          <label>
            Role:
            <select
              style={{ padding: "5px", marginTop: "10px", marginLeft :"5px" }}
              value={formInput.role}
              onChange={(e) => handleInputChange(e)}
              name="role"
            >
              <option value="admin">
                admin
              </option>
              <option value="user" defaultChecked>user</option>
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

        <div style={{ marginTop: "5px" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            Already a user?? try login here
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;
