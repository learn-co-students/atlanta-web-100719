import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

class App extends Component {

  state = {
    books: []
  }

  handleClick = (e) => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => {
      this.setState({ books: data })
    })
  }

  handleRemoveClick = (e) => {
    const bookid = e.target.dataset.id
    const newBooks = [...this.state.books].filter(book => parseInt(bookid) !== book.id )
    
    this.setState({ books: newBooks })
  }

  render(){
    return (
      <div className="parent">
        <Header handleClick={this.handleClick} />
        <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/>
      </div>
    );
  }
}

export default App;
