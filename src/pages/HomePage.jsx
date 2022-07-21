import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import "../css/HomeStyle.css";

export default function Home() {
    const { state } = useLocation();          // current user details as state passed from login page as { state : user }      
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usersAll = JSON.parse(localStorage.getItem("usersAll"));
    const [userDetails, setUserDetails] = useState(usersAll);
    console.log(state);

    const handleLogOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    return (
        <div className="home_page">
            <div style={{ display: "flex", flexDirection: "row", height: "10%", width: "100%" }}>
                <h2 style={{ color: "blue", justifyContent: "center" }}>Welcome  {currentUser.name}!!</h2>
                <button
                    style={{
                        padding: "10px 25px",
                        background: "#077",
                        border: "0",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                        alignContent: "center",
                        marginLeft: "1000px",
                        marginTop: "20px"
                    }} onClick={handleLogOut} >Logout</button>
            </div>

            <table className="table-style">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Role</th>
                        {state.role === "admin" && <th>Edit</th>}
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map((user, index) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td>{user.role}</td>
                            {user.role === "user" && <td>Delete</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
