import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './dux';
import { Provider } from 'react-redux';

import Game from './components/game';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
