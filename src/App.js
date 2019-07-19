import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/BusinessList/businessList.js';
import './components/SearchBar/SearchBar.js';
import SeachBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/businessList.js';

const business={
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses=[business, business, business, business, business, business];

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SeachBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
