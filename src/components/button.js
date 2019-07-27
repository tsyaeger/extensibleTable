import React from 'react';

const Button = ({handleClick, text}) => {
  return (
    <div className='more-button-wrapper'>
      <button
        className='more-btn'
        onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}
export default Button;
