import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookResults from "../components/bookresults";

export default class BookSearch extends Component {
    state = {
        search: "",
        results: [],
        error: "",
        good: false
    };

    handleInputChange = (event) => {
        const {name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleBookSearch = (event) => {
        API.searchBook(this.state.search).then((res) => {
            console.log(res.data);
            this.setState({results: res.data.items, good: true});
        }).catch(err => this.setState({error: err}));
    }

    handleRenderingResults = () => {
        if (this.state.results) {
            var newArray = this.state.results.map(b => {
                var {authors, title, publisher, thumbnail, description, link} = b.VolumeInfo;
                return <BookResults handleSavingBooks={this.handleSavingBooks} key={title} authors={authors} title={title} publisher={publisher} thumbnail={thumbnail} description={description} link={link}/> 
            })
            return newArray;
        }
        else
        {
            this.handleEmptyResults();
        }
    }

    handleEmptyResults = () => {
        return <div><Jumbotron><h2>No Books Found</h2></Jumbotron></div>
    }
}