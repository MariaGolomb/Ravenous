import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/BusinessList/businessList.js';
import './components/SearchBar/SearchBar.js';
import SeachBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/businessList.js';


function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SeachBar />
      <BusinessList />

    </div>

  );
}

export default App;
