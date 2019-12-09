import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.singleBook.img} alt="" />
      <h3>Book Name: {props.singleBook.title} </h3>
      <h3>Author: {props.singleBook.author} </h3>
    </div>
  )
}

export default Card;
