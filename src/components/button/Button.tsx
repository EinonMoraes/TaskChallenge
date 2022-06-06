import React from 'react';
import './styles.css'

function Button(props) {
  return ( <div>
    <button className={props.className} type="submit" data-testid="add-task-button">
      <img src={props.svg}  />
    </button>
  </div>)
}

export default Button;