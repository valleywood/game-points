import React, { Component } from 'react';
import Bonus from '../components/bonus';
import Total from '../components/total';
import { newGame } from '../actions/new-game';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PlayerFooter extends Component {
  render() {
    return (
      <div className="footer">
        <Bonus totalBonus={this.props.totalBonus} />
        <div className="total">
          <Total totalPoints={this.props.totalPoints} />
          <button className="button" onClick={() => this.props.newGame()}>
            NEW GAME
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newGame: newGame }, dispatch);
}

function mapStateToProps(state) {
  return {
    totalBonus: state.playerItems.totalBonus,
    totalPoints: state.playerItems.totalPoints,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerFooter);
