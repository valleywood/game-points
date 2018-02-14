import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ totalPoints }) => {
  return (
    <div>
      <div>Total:</div>
      <div>{totalPoints}</div>
    </div>
  );
};

Total.propTypes = {
  totalPoints: PropTypes.number.isRequired,
};

export default Total;
