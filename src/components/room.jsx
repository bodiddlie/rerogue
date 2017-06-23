import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Room = ({ room }) =>
  <Grid>
    {room.map((row, y) =>
      <g key={y}>
        {row.map((cell, x) => <Cell key={`${x}-${y}`} x={x * 32} y={y * 32} type={cell.type} />)}
      </g>
    )}
  </Grid>;

function mapStateToProps(state) {
  return {
    room: state.room,
  };
}

export default connect(mapStateToProps)(Room);

//STYLED COMPONENTS

const Grid = styled.svg`
  width: 640px;
  height: 640px;
  border: 2px solid black;
`;

const Cell = styled.rect`
  width: 32px;
  height: 32px;
  fill: ${props => getBackgroundColor(props.type)};
  stroke: black;
  stroke-width: 2px;
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
