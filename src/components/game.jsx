import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Room from './room';
import { generateRoom } from '../dux/room';

const Game = ({ buildRoom }) =>
  <Container>
    <Room />
    <button type="button" onClick={() => buildRoom()}>Build Room</button>
  </Container>;

function mapDispatchToProps(dispatch) {
  return {
    buildRoom: () => {
      dispatch(generateRoom());
    },
  };
}
export default connect(null, mapDispatchToProps)(Game);

//STYLED COMPONENTS

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: green;
`;
