import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

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

  handleAppSubmit = (newBook) => {
    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(book => {
      const newBooks = [...this.state.books, book]
      this.setState({ books: newBooks, author: '', title: '', img: '' })
    })
  }

  render(){
    return (
      <div className="parent">
        <Header handleClick={this.handleClick} />
        <BookForm handleAppSubmit={this.handleAppSubmit} />
        <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/>
      </div>
    );
  }
}

export default App;
