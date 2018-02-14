import React from 'react';
import GameHeader from './game-header';
import PlayerItems from '../containers/player-items';
import PlayerFooter from '../containers/player-footer';

const Player = () => {
  return (
    <React.Fragment>
      <GameHeader title="PLAYER ITEMS" />
      <PlayerItems />
      <PlayerFooter className="footer" />
    </React.Fragment>
  );
};

export default Player;
