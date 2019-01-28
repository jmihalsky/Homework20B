import React from "react";
import "./style.css";

export default function BookResults(props) {
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <h3>{props.authors ? props.authors.join(" , "):" "}</h3>
                    <div className="text-right">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-success">View</button>
                        </a>
                        <button onClick={() => props.handleSavingBooks(props.authors, props.title, props.publisher, props.thumbnail, props.description, props.link)} type="button" className="btn btn-info">Save</button>
                    </div>
                    <small>Published By {props.publisher}</small>
                </div>
                <div className="card-body">
                    <img className="image" src={props.thumbnail} alt={props.title} />
                    <p className="results-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}