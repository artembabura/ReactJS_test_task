import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from '../app';
import store from '../store';

ReactDOM.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('app')
);