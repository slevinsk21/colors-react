import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../src/helpers';

import App from './components/App';

import './style/main.sass';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
