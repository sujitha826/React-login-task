import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";                         // can be used for close button X as <FaTimes />

import Input from "./Input";
import { validatePassword, validatePhone } from "../validators/validateInputs";

export default function EditModal({ editRow, editModalOpen, setEditModalOpen, setUserDetails }) {
    const usersAll = JSON.parse(localStorage.getItem("usersAll"));
    const editUser = usersAll[editRow];

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

    const handleUpdatedForm = (editRow) => {
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
            ["gender"] : editForm.gender,
            ["phone"]: editForm.phone,
            ["dept"] : editForm.dept,
            ["role"] : editForm.role,
            ["password"] : editForm.password,
            ["confirmPassword"] : editForm.confirmPassword
          };
          const newUsersAll = [...othersDetails, editedUser];
      
          localStorage.setItem("usersAll", JSON.stringify(newUsersAll));          // update local storage
          setUserDetails(newUsersAll);                                            // render new details to table
          setEditModalOpen(false);                                                // disappear edit modal
    }



}