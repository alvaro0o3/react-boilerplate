import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const key = process.env.NODE_ENV;

if (key === 'development') {
  module.hot.accept(); // Activa el HMR
}
