import React, {Component} from "react";
import SavedBooks from "../components/savedbooks";
import API from "../utils/API";

export default class Saved extends Component {
    componentDidMount(){
        this.handleLoadBooks();
    }

    state = {
        SavedBooks: []
    }

    handleLoadBooks = () => {
        API.getBooks().then(res => {
            this.setState({SavedBooks: res.data});
        })
    }

    handleRenderingBooks = () => {
        let temp = this.state.SavedBooks.map(b => 
            <SavedBooks key={b.title} handleBookDelete={this.handleBookDelete} id={b.id} authors={b.authors} title={b.title} publisher={b.publisher} thumbnail={b.thumbnail} description={b.description} />
        )

        return temp;
    }

    handleBookDelete = (id) => {
        API.deleteBook(id).then(res => {
            this.handleLoadBooks();
        })
    }

    render() {
        return(
            <div>
                {this.handleRenderingBooks()}
            </div>
        )
    }
}