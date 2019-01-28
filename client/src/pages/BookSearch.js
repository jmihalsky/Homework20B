import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookResults from "../components/bookresults";
import SearchBar from "../components/searchbar";

export default class BookSearch extends Component {
    state = {
        search: "",
        SearchAmt: "",
        results: [],
        error: "",
        good: false
    };

    handleInputChange = (event) => {
        const {name, value } = event.target;
        console.log(name, value);
        this.setState({ [name]: value});
        console.log(this.state.SearchAmt);
    }

    handleBookSearch = (event) => {
        API.searchBook(this.state.search, this.state.SearchAmt).then((res) => {
            console.log(res.data);
            this.setState({results: res.data.items, good: true});
        }).catch(err => this.setState({error: err}));
    }

    handleRenderingResults = () => {
        if (this.state.results) {
            console.log(this.state)
            var newArray = this.state.results.map(b => {
                return <BookResults 
                handleSavingBooks={this.handleSavingBooks} 
                key={b.volumeInfo.title} 
                authors={b.volumeInfo.authors} 
                title={b.volumeInfo.title} 
                publisher={b.volumeInfo.publisher} 
                thumbnail={b.volumeInfo.imageLinks.thumbnail} 
                description={b.volumeInfo.description} 
                link={b.volumeInfo.canonicalVolumeLink}/> 
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

    handleSavingBooks = (authors, title, publisher, thumbnail, description, link) => {
        var newBook = {
            authors: authors,
            title: title,
            publisher: publisher,
            thumbnail: thumbnail,
            description: description,
            link: link
        };
        API.saveBook(newBook).then(res => {
            console.log(res);

        })
    }

    render() {
        return(
            <div>
                <SearchBar handleBookSearch={this.handleBookSearch} handleInputChange={this.handleInputChange}/>
                {!this.state.results.length ? this.handleEmptyResults() : this.handleRenderingResults()}
            </div>
        );
    }
}