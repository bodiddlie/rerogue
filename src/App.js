import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './dux/world';
import { connect, Provider } from 'react-redux';

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

const GameDisplay = ({ world }) =>
  <div>
    {world.map(cell => <span>{cell}</span>)}
  </div>;

const mapStateToProps = state => {
  return {
    world: state,
  };
};

const Game = connect(mapStateToProps)(GameDisplay);

export default App;
