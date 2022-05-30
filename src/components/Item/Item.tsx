import React from 'react';

import './styles.css'
import svg from '../../assets/icon-square.svg'


const Item: React.FC = () => {
  return (<div className='task-line'>
      <img src={svg}></img>
      <p>Teste</p> 
  </div> 
  );

}

export default Item;