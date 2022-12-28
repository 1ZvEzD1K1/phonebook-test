import React from 'react'
import "./style.scss";

const Button = ({text, color, handleClick, type = 'button'}) => {
  return (
    <button type={type} onClick={handleClick} style={{backgroundColor: color}}>
        {text}
    </button>
  )
}

export default Button