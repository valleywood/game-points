import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GameItemDiv = styled.div`
  height: ${props => props.size}px;
  max-width: ${props => props.size}px;
  min-width: ${props => props.size}px;
  line-height: ${props => props.size}px;
  margin: ${props => (props.margin ? props.margin : 35)}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;
  text-align: center;
  border: 1px solid black;
  flex-grow: 0;
  flex-shrink: 0;
`;

const GameItem = ({ item, size, margin, fontSize, onClick }) => {
  return (
    <GameItemDiv
      size={size}
      margin={margin}
      fontSize={fontSize}
      onClick={() => (onClick ? onClick(item) : null)}
    >
      {item.name}
    </GameItemDiv>
  );
};

GameItem.propTypes = {
  item: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  margin: PropTypes.number,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
};

export default GameItem;
