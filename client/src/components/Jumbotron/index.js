import React from 'react'
import "./style.css";

export default function Jumbotron(props) {
    return (
        <div className="jumbotron text-center" style={{ margin: "20px" }}>
            {props.children}
        </div>
    )
}