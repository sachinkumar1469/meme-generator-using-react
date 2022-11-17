import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Comp1 from './test/Comp1';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Meme/>
      {/* <Comp1/> */}
    </div>
  );
}

export default App;
