import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
      mountIt: false
    }
    console.log(this.__proto__.constructor.name, "constructor")
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => {
      this.setState({ books: data })
    })
  }



  handleClick = (e) => {
    this.setState({ mountIt: !this.state.mountIt })
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
        {
          this.state.mountIt ? <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/> : console.log(this.state.mountIt)
        }
      </div>
    );
  }
}

export default App;
