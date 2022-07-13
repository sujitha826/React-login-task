import React from "react";

export default function Input({ title, type, value, onChange, placeholder, name }) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <p>{title}</p>
      <input
        name={name}
        type={type}
        style={{
          padding: "10px",
          border: "0",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          borderRadius: "5px",
        }}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}