import React from "react";
import "./style.css";

export default function SearchBar(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <form>
                        <label htmlFor="BookSearch"><strong>Book Search</strong></label>
                        <input name="search" onChange={props.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Harry Potter" />
                        <button onClick={props.handleBookSearch} type="button" className="btn btn-info search" style={{ textAlign: "left"}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}