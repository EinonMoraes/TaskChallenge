import React from 'react';
import Button from '../button/Button';
import Input from '../Input/Input';
import './styles.css'

const Header: React.FC = () => {
  return (
    <div className='header' >
      <h1>Today</h1>
      <div className='headerLine'>
        <Input/>
        <Button svg='assets/icon-check-square.svg' className='button-green'/>
      </div>  
    </div>
  );
  
}

export default Header;