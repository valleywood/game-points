import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameItem from '../components/game-item';
import TableItem from '../components/table-item';
import 'react-table/react-table.css';

import ReactTable from 'react-table';

class PlayerItems extends Component {
  render() {
    const columns = [
      {
        Header: () => <div className="align-left">ITEM</div>,
        accessor: props => props.item,
        id: 'item',
        Cell: d => <GameItem item={d.value} size={50} margin={5} />,
      },
      {
        Header: 'QTY',
        accessor: 'quantity',
        maxWidth: 100,
        Cell: d => <TableItem>{d.value}</TableItem>,
      },
      {
        Header: 'SCORE',
        maxWidth: 100,
        id: 'score',
        accessor: d => d.bonus + d.score,
        Cell: d => <TableItem>{d.value}</TableItem>,
      },
    ];

    return (
      <div className="player-items">
        <ReactTable
          data={this.props.items}
          columns={columns}
          showPagination={false}
          noDataText="No player items"
          sortable={false}
          minRows={5}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.playerItems.playerItems,
  };
}

export default connect(mapStateToProps)(PlayerItems);
