import React from 'react';
import Button from '../button/Button';

import './styles.css'


const Item: React.FC = () => {
  return (<div className='task-line'>
      <Button className='empty-button' svg='assets/icon-square.svg'/>
      <p>Teste</p> 
      <Button  className='trash' svg='assets/trash-2.svg'/>

  </div> 
  );

}

export default Item;