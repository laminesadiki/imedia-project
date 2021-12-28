import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}

export default App;
