import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  return(
    <div className="card-container">

      {
        props.books.map((book) => <Card singleBook={book} />)
      }

    </div>
  )
}

export default CardContainer;
