import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';

const Header = (props) => {

  console.log(props)
  return (
    <div className='navbar' onClick={props.handleClick}>
      <div className='header'> Books App (not Amazon duh!) </div>
      <nav>

        <Link to='/'>
          <h3>Home</h3>
        </Link>

        <Link to='/newbook'>
          <h3>Add New Book</h3>
        </Link>

        <Link to='/login'>
          <h3>Login</h3>
        </Link>

      </nav>
    </div>
  )
}

export default withRouter(Header);
