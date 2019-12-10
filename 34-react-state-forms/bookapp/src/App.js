import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
// import BookForm from './Components/BookForm'


class App extends Component {

  state = {
    books: [],
    title: '',
    author: '',
    img: '',
    isEditing: false
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

  handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img,
      read: false
    }

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

  handleOnChange = (e) => {

    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'author'){
      this.setState({ author: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }
  }

  render(){
    return (
      <div className="parent">
        <Header handleClick={this.handleClick} />

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={this.state.author} onChange={this.handleOnChange} />
          </label>
          <label>
            Image:
            <input type="text" name="img" value={this.state.img} onChange={this.handleOnChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/>
      </div>
    );
  }
}

export default App;
