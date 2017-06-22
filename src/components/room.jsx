import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Room = ({ room }) =>
  <Grid>
    {room.map((row, i) =>
      <Row key={i}>
        {row.map((cell, i) => <Cell key={i} type={cell.type} />)}
      </Row>
    )}
  </Grid>;

function mapStateToProps(state) {
  return {
    room: state.room,
  };
}

export default connect(mapStateToProps)(Room);

//STYLED COMPONENTS

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 640px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Cell = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props => getBackgroundColor(props.type)};
`;

function getBackgroundColor(cellType) {
  switch (cellType) {
    case 'wall': {
      return 'gray';
    }
    case 'ground': {
      return 'brown';
    }
    case 'exit': {
      return 'red';
    }
    default: {
      return 'transparent';
    }
  }
}
