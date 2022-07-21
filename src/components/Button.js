import React from "react";

export default function Button({ onClick, title }) {
  return (
    <div style={{ width: "100%",display:"flex", justifyContent:"center"}}>
      <button
        style={{
          padding: "10px 25px",
          background: "#197765",
          border: "0",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          alignContent: "center"
        }}
        onClick={onClick}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}