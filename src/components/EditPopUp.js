import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Input from "./Input";
import { validatePassword, validatePhone } from "../validators/validateInputs";
import "../css/EditPopUpStyle.css";

export default function EditModal({ editRow, setEditModalOpen, setUserDetails }) {
    const usersAll = JSON.parse(localStorage.getItem("usersAll"));
    const editUser = usersAll[editRow];                         // editRow -index of the user details which is to be edited

    const [editForm, setEditForm] = useState({
        name: editUser.name,
        email: editUser.email,
        phone: editUser.phone,
        gender: editUser.gender,
        dept: editUser.dept,
        role: editUser.role,
        password: editUser.password,
        confirmPassword: editUser.confirmPassword,
    });

    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const handleNewChanges = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateForm = (editRow) => {
        if (
            editForm.password === "" ||
            editForm.name === "" ||
            editForm.phone === ""
        )
            return alert(
                "Name, email, phone and password are mandatory...please fill all 4 fields"
            );

        if (!validatePhone(editForm.phone))
            return setPhoneError(true);

        if (!validatePassword(editForm.password))
            return setPasswordError(true);

        if (!(editForm.password === editForm.confirmPassword))
            return setConfirmPasswordError(true);

        const othersDetails = usersAll.filter((user, index) => index !== editRow);                 // other users in the array
        const editedUser = {
            ...editUser,
            ["name"]: editForm.name,
            ["gender"]: editForm.gender,
            ["phone"]: editForm.phone,
            ["dept"]: editForm.dept,
            ["role"]: editForm.role,
            ["password"]: editForm.password,
            ["confirmPassword"]: editForm.confirmPassword
        };
        const newUsersAll = [...othersDetails, editedUser];

        localStorage.setItem("usersAll", JSON.stringify(newUsersAll));          // update local storage
        setUserDetails(newUsersAll);                                            // render new details to table
        setEditModalOpen(false);                                                // disappear edit modal
    }

    return (
        <>
            <div className="modal_page">
                <div className="modal_container">
                    <div className="modal_header">
                        <h2 className="modal_heading">Edit User details</h2><FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => setEditModalOpen(false)} />
                    </div>


                    <div className="modal_form">
                        <div style={{ width: "60%" }}>
                            <Input
                                title="Full Name"
                                onChange={(e) => handleNewChanges(e)}
                                value={editForm.name}
                                type="text"
                                name="name"
                            />
                            <Input
                                title="Email"
                                onChange={(e) => handleNewChanges(e)}
                                value={editForm.email}
                                type="email"
                                name="email"
                                disabled={true}
                            />
                            <Input
                                title="Phone"
                                onChange={(e) => handleNewChanges(e)}
                                value={editForm.phone}
                                type="text"
                                name="phone"
                            />
                            {phoneError && <div className="invalid">Please enter a valid phone number</div>}
                            <div> <label>
                                Gender:
                                <input type="radio" value="Male" name="gender" onChange={(e) => handleNewChanges(e)} /> Male
                                <input type="radio" value="Female" name="gender" onChange={(e) => handleNewChanges(e)} /> Female
                            </label></div>
                            <div>
                                <label>
                                    Department:
                                    <select
                                        style={{ padding: "5px", marginTop: "10px", marginRight: "10px", marginLeft: "5px" }}
                                        value={editForm.dept}
                                        onChange={(e) => handleNewChanges(e)}
                                        name="dept"
                                    >
                                        <option value="Web">Web</option>
                                        <option value="Platform">Platform</option>
                                        <option value="Middleware">Middleware</option>
                                        <option value="Product Delivery">Product Delivery</option>
                                    </select>
                                </label><br></br>

                                <label>
                                    Role:
                                    <select
                                        style={{ padding: "5px", marginTop: "10px", marginLeft: "5px" }}
                                        value={editForm.role}
                                        onChange={(e) => handleNewChanges(e)}
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
                                onChange={handleNewChanges}
                                value={editForm.password}
                                placeholder="Enter Password"
                            />
                            {passwordError && <div className="invalid">Password should contain atleast one alphabet,one digit and minimum 8 total chars</div>}

                            <Input
                                title="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                onChange={handleNewChanges}
                                value={editForm.confirmPassword}
                                placeholder="Confirm Password"
                            />
                            {confirmPasswordError && <div className="invalid">Password and Confirm Password do not match.</div>}
                        </div>
                        <div className="modal_actions">
                            <button
                                className="update_btn"
                                onClick={() => handleUpdateForm(editRow)}
                            >
                                Save Changes
                            </button>
                            <button
                                className="cancel_btn"
                                onClick={() => setEditModalOpen(false)}
                            >
                                Cancel
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}