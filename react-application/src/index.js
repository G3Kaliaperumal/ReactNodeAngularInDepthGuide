import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

const domElement = document.getElementById('root');
// JSX - Javascript XML
ReactDOM.render(<App />, domElement);
