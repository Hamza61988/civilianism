import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import Main from './Main';
import { Images } from './Images';  // Import the Images component
import { Mission } from './Mission';
import { Roadmap } from './Roadmap';
import Team from './Team';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Main />
    <App />
    <Images /> 
    <Mission/>
    <Roadmap/>
    <Team/>
    

  </div>
);
