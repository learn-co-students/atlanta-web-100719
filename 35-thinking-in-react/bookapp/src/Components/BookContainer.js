import React from 'react';
import BookCard from './BookCard'

const BookContainer = (props) => {
  return (
    <div className='maincontainer'>
      {
        props.books.map(book => <BookCard book={book} key={book.id} handleRemoveClick={props.handleRemoveClick} />)
      }
    </div>
  )
}

export default BookContainer;
