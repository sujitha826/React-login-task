import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import ForgotPassword from "../components/ForgotPassword";
import { validateEmail, validatePassword } from "../validators/validateInputs";
import "../css/LoginStyle.css";

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showforgotModal, setshowforgotModal] = useState(false);

    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleForgotPassword = () => {
        setshowforgotModal(true);
    }

    const handleUserLogin = () => {
        if (formInput.email === "" || formInput.password === "")
            return alert("Please fill both fields");
        if (!validateEmail(formInput.email)) return alert("Email is invalid");
        if (!validatePassword(formInput.password))
            return alert(
                "Password should contain atleast one alphabet,one digit and minimum 8 total chars"
            );

        const usersAll = JSON.parse(localStorage.getItem("usersAll"));                // check users array(all logged-in users info) stored in localStorage
        console.log(JSON.stringify(usersAll));
        if (!usersAll) return alert("Oops! something went wrong!! please try again...");

        const user = usersAll.find((user) => user.email === formInput.email);         // find the current user from the users array

        if (!user) {
            return alert("User information doesn't exist at the moment, Please register to the portal");
        }

        if (user.email !== formInput.email || user.password !== formInput.password)
            return alert("Email or password is wrong");

        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("Current User logged in" + JSON.stringify(user));

        navigate("/home", {                                     // navigate to home page with current user state as options
            state: user,
        });
    };
    
    return (
        <div className="login_page">
            {showforgotModal && (
                <ForgotPassword
                    setshowforgotModal={setshowforgotModal}
                />
            )}
            <h2>LOGIN</h2>
            <div className="field_input">
                <Input
                    name="email"
                    title="Email"
                    type="text"
                    placeholder="Enter your registered email"
                    onChange={handleInputChange}
                    value={formInput.email}
                />

                <Input
                    name="password"
                    title="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    value={formInput.password}
                />
                <div style={{ display: "flex", alignItems: "center", flexDirection:"row" }}>
                    <input
                        type="checkbox"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    <p style={{ marginLeft: "2px" }}>Show password</p>
                    <button type="submit" class="link" onClick={handleForgotPassword}><span>Forgot Password?</span></button>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <Link style={{ textDecoration: "none", color:"blue" }} to="/register">
                        New User?? Register now
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <Button onClick={handleUserLogin} title="Login" />
            </div>
        </div>
    );
}
