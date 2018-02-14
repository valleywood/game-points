import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameItemLink from '../containers/game-item-link';
import { loadItems } from '../actions/load-items';
import { bindActionCreators } from 'redux';

class GameItems extends Component {
  renderList() {
    return this.props.items.map(gameItem => {
      return (
        <li key={gameItem.name}>
          <GameItemLink item={gameItem} size={150} fontSize={30} />
        </li>
      );
    });
  }

  render() {
    return <ul className="">{this.renderList()}</ul>;
  }

  componentWillMount() {
    // Could have done this as an initial state in the reducer but
    // preparing for connecting to an API where data will be fetch asynchronously
    this.props.loadItems();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadItems: loadItems }, dispatch);
}

function mapStateToProps(state) {
  return { items: state.gameItems };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameItems);
