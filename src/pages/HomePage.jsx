import React from "react";
import Counter from "../components/Counter";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
    };
    
    return(
        <div className="home_page">
        <h1>Welcome {currentUser.name}!!</h1>
            <div style={{ marginTop: "30px", marginLeft:"1000px" }}>
                <Button onClick={handleLogOut} title="Logout" />
            </div>
        </div>
    )
};
