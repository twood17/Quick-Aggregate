import React from "react";
import "./style.css";

function Clear_Search(props) {
    return (
        <div>
            <button
            className = {"searh-clear"}
            onClick = {() => props.clearSearch()}
            >
                Clear Search
            </button>
        </div>
    )
}

export default Clear_Search