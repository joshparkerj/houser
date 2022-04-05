import React from 'react';
import './App.css';
import Routes from './route';
import Header from './component/Header/Header';

const App = function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
