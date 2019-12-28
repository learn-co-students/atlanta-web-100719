import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

import Login from './Components/Login'

import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    books: [],
    isLoggedIn: false
  }

  componentDidMount(){

    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => {

      let logged_in = localStorage.getItem('auth_token') !== null ? true : false

      this.setState({ books: data.books, isLoggedIn: logged_in })
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
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('auth_token')
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(book => {
      console.log(book)
      const newBooks = [...this.state.books, book]
      this.setState({ books: newBooks, author: '', title: '', img: '' })
    })
  }

  handleLogin = (e,params) => {
    fetch('http://localhost:3000/authors',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author: params})
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('auth_token',data.token)
      this.setState({ isLoggedIn: true })
    })
  }

  render(){
    return (
      <div className="parent">


        <Router>

        <Header isLoggedIn={this.state.isLoggedIn} />
          <Switch>



            <Route exact path='/'>
              <BookContainer books={this.state.books} handleRemoveClick={this.handleRemoveClick}/>
            </Route>

            <Route path='/newbook'>
            {
              this.state.isLoggedIn
              ? <BookForm handleAppSubmit={this.handleAppSubmit} />
              : <Redirect to='/login' />
            }
            </Route>

            <Route path='/login'>
            {
              this.state.isLoggedIn
              ? <Redirect to='/' />
              : <Login handleLogin={this.handleLogin} />
            }
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
