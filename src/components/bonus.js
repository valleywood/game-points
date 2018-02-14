import React from 'react';
import PropTypes from 'prop-types';

const Bonus = ({ totalBonus }) => {
  return <div className="bonus">Bonuses: {totalBonus}</div>;
};

Bonus.propTypes = {
  totalBonus: PropTypes.number.isRequired,
};

export default Bonus;
