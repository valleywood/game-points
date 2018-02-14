import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabletItemDiv = styled.div`
  height: 50px;
  line-height: 50px;
  max-width: 80px;
  min-width: 80px;
  margin: 5px;
  text-align: center;
`;

const TableItem = ({ children }) => {
  return <TabletItemDiv>{children}</TabletItemDiv>;
};

TableItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default TableItem;
