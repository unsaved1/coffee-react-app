import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/app-pages/app/app';
import OurCoffePage from './components/app-pages/our-coffee-page/our-coffee-page';
import PleasurePage from './components/app-pages/pleasure-page/pleasure-page';
import CoffeeItemPage from './components/app-pages/coffee-item-page/coffee-item-page';

import {
    HashRouter as Router,
    Routes, 
    Route
  } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/ourCoffee' element={<OurCoffePage/>}/>
      <Route path='/coffeeItem' element={<CoffeeItemPage/>}/>
      <Route path='/forYourPleasure' element={<PleasurePage/>}/>
      <Route path='/' element={<App/>}/>
    </Routes>
  </Router>
);
