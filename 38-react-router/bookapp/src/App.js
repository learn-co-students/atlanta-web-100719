import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    console.log('App container was mounted')
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


        <Router>
          <Header/>

          <Switch>

            <Route exact path='/'>
              <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/>
            </Route>

            <Route path='/newbook'>
              <BookForm handleAppSubmit={this.handleAppSubmit} />
            </Route>

            <Route path='/login'>
              <div>
                <h3> This is Login </h3>
              </div>
            </Route>

            <Route>
              <Redirect to='/' />
            </Route>

          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
