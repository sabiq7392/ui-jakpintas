import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
}
