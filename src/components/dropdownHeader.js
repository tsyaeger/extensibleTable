import React from 'react';

const DropdownHeader = ({objName, handleClick}) => {
  return (
    <div className='dropdown-header-wrapper' onClick={handleClick}>
      <span className='head-dropdown left'>
        <p>{`recent ${objName}`}</p>
      </span>
      <span>
        <i className="head-dropdown arrow down"></i>
      </span>
    </div>
  )
}
export default DropdownHeader;
