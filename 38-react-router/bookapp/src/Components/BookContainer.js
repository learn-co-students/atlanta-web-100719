import React from 'react';
import BookCard from './BookCard'

class BookContainer extends React.Component {

  componentDidMount(){
    console.log('Book container was mounted')
  }

  render(){
    return (
      <div className='maincontainer'>
        {
          this.props.books.map(book => <BookCard book={book} key={book.id} handleRemoveClick={this.props.handleRemoveClick} />)
        }
      </div>
    )
  }
}

export default BookContainer;
