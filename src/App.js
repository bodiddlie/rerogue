import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Game from './components/game';
import reducer from './dux';
import { watchPlayerMove, tryMovePlayer } from './sagas/player';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(watchPlayerMove);

class App extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleInput);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleInput);
  }

  handleInput = event => {
    event.preventDefault();
    event.stopPropagation();

    switch (event.which) {
      case 38: {
        store.dispatch(tryMovePlayer(0, -1));
        break;
      }
      case 40: {
        store.dispatch(tryMovePlayer(0, 1));
        break;
      }
      case 37: {
        store.dispatch(tryMovePlayer(-1, 0));
        break;
      }
      case 39: {
        store.dispatch(tryMovePlayer(1, 0));
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
