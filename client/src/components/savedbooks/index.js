import React from "react";
import "./style.css";

export default function SavedBooks(props) {
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <h5>{props.authors}</h5>
                    <div className="text-right">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-success">View</button>
                        </a>
                        <button onClick={() => props.handleBookDelete(props.id)} type="button" id={props.id} className="btn btn-info">Delete</button>
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