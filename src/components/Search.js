import React, { useState } from "react";


export default function SearchBar({ searchField,
    handleClear,
    handleSearchSubmit,
    handleSearchTextChange,
}) {

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "8%", width: "50%" }}>
            <p style={{ marginLeft: "10px", fontFamily: "sans-serif" }} >Name:</p>
            <input name="name"
                type="text"
                placeholder="Enter the name to search"
                onChange={handleSearchTextChange}
                value={searchField.name}
                style={{
                    padding: "10px",
                    border: "0",
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    marginLeft: "8px",
                    backgroundColor: "skyblue"
                }} />
            <label style={{ marginLeft: "10px", fontFamily: "sans-serif" }}>
                Role:
                <select
                    style={{
                        padding: "5px", marginTop: "10px", marginLeft: "5px", backgroundColor: "skyblue",
                        border: "0", boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        borderRadius: "5px",
                    }}
                    value={searchField.role}
                    onChange={(e) => handleSearchTextChange(e)}
                    name="role"
                >
                    <option value="admin">
                        admin
                    </option>
                    <option value="user">user</option>
                </select>
            </label>
            <button
                style={{
                    padding: "10px 20px",
                    background: "#DCDCDC",
                    border: "0",
                    color: "black",
                    borderRadius: "5px",
                    cursor: "pointer",
                    alignContent: "center",
                    marginLeft: "40px",
                    height: "60%"
                }}
                onClick={handleSearchSubmit}
                type="submit"
            >
                Search
            </button>
            <button
                style={{
                    padding: "10px 20px",
                    background: "#DCDCDC",
                    border: "0",
                    color: "black",
                    borderRadius: "5px",
                    cursor: "pointer",
                    alignContent: "center",
                    marginLeft: "30px",
                    height: "60%"
                }}
                onClick={handleClear}
                type="submit"
            >
                Clear
            </button>

        </div>
    )

}
