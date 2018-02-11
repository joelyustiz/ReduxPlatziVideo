import React from 'react';

function Icon(props) {
  const {
    color,
    size,
    handleClickIcon,
  } = props
  
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
      onClick={handleClickIcon}
    >
      {props.children}
    </svg>
  )
}

export default Icon;
