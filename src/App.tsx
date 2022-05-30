import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Item from './components/Item/Item';

const App: React.FC = () => {
  return (
    <div className='content' >
      <Header />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export { App };