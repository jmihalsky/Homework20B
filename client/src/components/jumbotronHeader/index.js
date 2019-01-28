import React from 'react'
import "./style.css";

export default function Jumbotron(props) {
    return (
        <div id="JumboHeader" className="jumbotron text-center" style={{ margin: "20px" }}>
            <h1><img src="./images/Google_Books_logo_2015.png" alt="Google Books React Library"/>React Library</h1>
            {props.children}
        </div>
    )
}