import React from "react";
import "./style.css";

export default function SearchBar(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <form>
                        <span>
                            <label htmlFor="BookSearch"><strong>Book Search</strong></label>
                            <input name="search" onChange={props.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Harry Potter" />
                            <label htmlFor="SearchAmt"><strong>Number of results</strong></label>
                            <select name="SearchAmt" onChange={props.handleInputChange}>
                                <option value="5">5 Books</option>
                                <option value="10">10 Books</option>
                                <option value="15">15 Books</option>
                                <option value="20">20 Books</option>
                                <option value="25"> 25 Books</option>
                            </select>
                        </span>
                        <button onClick={props.handleBookSearch} type="button" className="btn btn-info search" style={{ textAlign: "left"}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}