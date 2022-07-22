import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../components/Search";
import "../css/HomeStyle.css";

export default function Home() {
    const { state } = useLocation();          // current user details as state passed from login page as { state : user }      
    console.log("State(current user) returned to home page" + JSON.stringify(state));
    const navigate = useNavigate();
    const filterRef = useRef();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usersAll = JSON.parse(localStorage.getItem("usersAll"));

    const [userDetails, setUserDetails] = useState(usersAll);
    const [searchField, setSearchField] = useState({name : "", role : "all"});              // Search object with 2 fields: name and role
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editRow, setEditRow] = useState("");


    const handleSearchTextChange = (e) => {
        setSearchField({
            ...searchField,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearchSubmit = () => {
        console.log(searchField);
        const result = usersAll.filter((user) =>
            (user.name.toLowerCase().includes(searchField.name.toLowerCase()) && (user.role === searchField.role))
        );
        console.log(result);
        if (currentUser.role === "admin") setUserDetails(result);
        else {
            const filteredUsers = result.filter(
                (user) => user.role === "user"
            );
            setUserDetails(filteredUsers);
        }
    };


    const handleClear = () => {
        setSearchField({name : "", role : "all"});
        return setUserDetails(usersAll);
    };


    const handleLogOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    const handleEdit = (index) => {
        setEditModalOpen(true);
        setEditRow(index);
    };

    return (
        <div className="home_page">
            <header style={{ display: "flex", flexDirection: "row", height: "10%", width: "100%" }}>
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
            </header>
            <SearchBar searchField = {searchField} handleSearchTextChange={handleSearchTextChange} handleClear={handleClear} handleSearchSubmit={handleSearchSubmit} />

            <table className="table-style">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map((user, index) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.dept}</td>
                            <td>{user.role}</td>
                            {currentUser.role === "admin" && <td><button onClick={() => handleEdit(index)}>Edit</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
