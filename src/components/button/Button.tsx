import React from 'react';
import './styles.css'
import check from '../../assets/check.svg'

const Button: React.FC = () => {
  return ( <div>
    <button type="submit" data-testid="add-task-button">
      <img src={check}  />
    </button>
</div>
  )
}

export default Button;