// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import './global.css'
import Badge from './components/Badge'



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge 
firstName="Thalia" 
lastName="Jimenez"
avatarUrl="https://www.gravatar.com/avatar?d=identicon"  
jobTitle="People Experience" 
twitter="twitter.name" 

/>, container);
