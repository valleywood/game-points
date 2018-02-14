import React from 'react';
import PropTypes from 'prop-types';

const GameHeader = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

GameHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default GameHeader;
