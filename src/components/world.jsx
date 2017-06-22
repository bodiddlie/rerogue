import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const WorldDisplay = ({ world }) =>
  <Grid>
    {world.map((row, i) => <Row key={i} row={row} />)}
  </Grid>;

const Row = ({ row }) =>
  <RowContainer>
    {row.map((cell, i) => <Cell key={i} cellType={cell} />)}
  </RowContainer>;

const mapStateToProps = state => {
  return {
    world: state.world,
  };
};

export default connect(mapStateToProps)(WorldDisplay);

//STYLED COMPONENTS

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Cell = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props => getBackgroundColor(props.cellType)};
`;

const getBackgroundColor = cellType => {
  switch (cellType) {
    case 'W':
      return 'gray';
    case 'G':
      return 'brown';
    default:
      return 'transparent';
  }
};
