import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';

const domElement = document.getElementById('root');
// JSX - Javascript XML
ReactDOM.render(<App />, domElement);
