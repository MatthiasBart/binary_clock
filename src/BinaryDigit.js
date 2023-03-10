import React from "react";
import './BinaryDigit.css';

function BinaryDigit(props) {
    let arr = Array.from(String(props.digit)).reverse()
    return <div className="wrapper">
        <div>{arr[3] === "1" ? "♥" : "♡"}</div>
        <div>{arr[2] === "1" ? "♥" : "♡"}</div>
        <div>{arr[1] === "1" ? "♥" : "♡"}</div>
        <div>{arr[0] === "1" ? "♥" : "♡"}</div>
        <div className="noArea">{props.digit}</div>
    </div>
}

export default BinaryDigit;