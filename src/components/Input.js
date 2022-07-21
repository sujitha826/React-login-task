import React from "react";

function styleSelector(field) {
  console.log(field);
  let style1 = {
    padding: "10px",
    border: "0",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius: "5px"
  };
  
  let style2 = {
    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius: "5px",
    border:"1px solid #ff0000",
  }
  return (field === "valid") ? style1 : style2;
}

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
          borderRadius: "5px"
        }}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}


