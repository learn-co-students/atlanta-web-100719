import React from 'react';

const Header = (props) => {

  return (
    <div className='navbar' onClick={props.handleClick}>
      <div className='header'> Books App (not Amazon duh!) </div>
    </div>
  )
}

export default Header;
