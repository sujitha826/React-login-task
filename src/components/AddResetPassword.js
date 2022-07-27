import React from "react";
import Input from "./Input";
import "../css/ForgotStyle.css";

export default function AddResetPassword({ inputPassword, setInputPassword }) {

    const handlePasswordChange = (e) => {
        setInputPassword({
            ...inputPassword,
            [e.target.name]: e.target.value
        });
        console.log("password changes" + JSON.stringify(inputPassword));
    }

    return (
        <div style={{ width: "60%" }}>
            <div style={{ width: "100%" }}>
                <Input
                    name="password"
                    title="Password"
                    type="text"
                    placeholder="Enter new password"
                    onChange={handlePasswordChange}
                    value={inputPassword.password}
                />
                <Input
                    name="confirmPassword"
                    title="Confirm Password"
                    type="password"
                    placeholder="Confirm password"
                    onChange={handlePasswordChange}
                    value={inputPassword.confirmPassword}
                />
            </div>
        </div>
    );
}