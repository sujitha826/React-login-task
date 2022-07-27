import React, { useState } from "react";
import Input from "./Input";
import { validatePassword } from "../validators/validateInputs";
import "../css/ForgotStyle.css";
import AddResetPassword from "./AddResetPassword";


export default function ForgotPassword({ setshowforgotModal }) {
    const usersAll = JSON.parse(localStorage.getItem("usersAll"));

    const [isVerifiedEmail, setisVerifiedEmail] = useState(false);
    const [showReset, setShowReset] = useState(false);

    const [inputEmail, setInputEmail] = useState({
        email: ""
    });

    const [inputPassword, setInputPassword] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleEmailChange = (e) => {
        setInputEmail({
            ...inputEmail,
            [e.target.name]: e.target.value
        });
    };

    const handleVerifyEmail = () => {
        if (inputEmail.email === "")
            return alert("Email field cannot be blank");
        
        const isEmailExists = usersAll.filter((user) => user.email === inputEmail.email);
        console.log(isEmailExists);
        if (isEmailExists[0]) {
            setisVerifiedEmail(true);
            setShowReset(true);
        }
        else {
            return alert("Email you have entered is not registered..")
        }
    }

    const resetPassword = () => {
        console.log("Resetting password -" + JSON.stringify(inputPassword));

        if (inputPassword.password === "")
            return alert("Please enter a new password");
        if (!validatePassword(inputPassword.password))
            return alert(
                "Password should contain atleast one alphabet,one digit and minimum 8 total chars"
            );
        if (!(inputPassword.password === inputPassword.confirmPassword))
            return alert(
                "Password and Confirm password do not match"
            );
        const item = usersAll.filter((user) => user.email === inputEmail.email);
        console.log("item" + JSON.stringify(item));
        if (item) {
            let index = usersAll.indexOf(item[0]);
            console.log(index);
            const updatedUser = {
                ...item[0],
                ["password"]: inputPassword.password,
                ["confirmPassword"]: inputPassword.confirmPassword,
            };
            usersAll[index] = updatedUser;
            console.log("Updated user details: " + JSON.stringify(usersAll[index]));
            
            localStorage.setItem("usersAll", JSON.stringify(usersAll));
            alert("Your password is successfully reset. Please try login now!!");
            setshowforgotModal(false);
        }
    }

    return (
        <>
            <div className="modal_page">
                <div className="modal_container">
                    <div className="modal_header">
                        <h2 className="modal_heading">FORGOT PASSWORD</h2>
                    </div>

                    <div className="modal_form">
                        <div style={{ width: "60%" }}>
                            <Input
                                title="Email"
                                onChange={handleEmailChange}
                                value={inputEmail.email}
                                type="text"
                                placeholder="Enter your registered email"
                                name="email"
                            />
                        </div>
                        {isVerifiedEmail && (
                            <AddResetPassword
                                inputPassword={inputPassword}
                                setInputPassword={setInputPassword}
                            />
                        )}
                    </div>

                    <div className="modal_actions">
                        <button
                            className="btn"
                            onClick={showReset ? resetPassword : handleVerifyEmail}
                        >
                            {showReset ? "Reset Password" : "Verify Email"}
                        </button>
                        <button
                            className="cancel_btn"
                            onClick={() => setshowforgotModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
