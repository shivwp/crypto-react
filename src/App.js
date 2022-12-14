import React from 'react';
import './App.css';
import Appnav from './Componenets/Appnav';
import Banner from './Componenets/Banner';
import Header from './Componenets/Header';
import Tableputcall from './Componenets/Tableputcall';



function App() {
  return (
    <div className='App'>
      <Appnav />
      <Banner />
      <Header />
      <Tableputcall />
    </div>
  );
}

export default App;
