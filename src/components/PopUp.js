import React from "react";
import Button from "./Button";
import "../css/RegisterStyle.css";

export default function PopUp(props) {

    const handleClick = () => {
        props.setPopupShow(false);
    }

    return (
        <div className="popupOpen"><div style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "20px", height: "50%", fontFamily: "sans-serif", marginTop: "20px", marginBottom: "1px" }}>User already exists..try login once</div>
            <Button onClick={handleClick} title="Close" /></div>
    );
}
