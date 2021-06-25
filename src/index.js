// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import './global.css'
import BadgeNew from './components/pages/BadgeNew';



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew/>, container);
