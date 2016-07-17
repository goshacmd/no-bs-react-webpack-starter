import 'babel-polyfill';

import 'styles/application.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import App from 'container/App';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  ReactDOM.render(<App />, el);
});
