import React from "react";
import Button from "./Button";
import "../css/RegisterStyle.css";

export default function PopUp(props) {

    const handleClick = () => {
       props.setPopupShow(false);
    }

    return (
        <div className="popupOpen"><h3>User already exists..try login once</h3>
            <Button onClick={handleClick} title="Close" /></div>
    );
}