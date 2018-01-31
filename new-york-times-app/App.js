/*
*
* Assignment 3
* Starter Files
*
* CS47SI
* Jan, 2017
*/

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './App/Reducers';
import Main from './App/main'

const store = createStore(reducers);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }

}
