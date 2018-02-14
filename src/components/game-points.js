import React from 'react';
import '../game-points.css';
import GameItemLinks from '../containers/game-item-links';
import GameHeader from './game-header';
import Player from './player';

const GamePoints = () => {
  return (
    <div className="points">
      <div className="game-items">
        <GameHeader title="Kahoot! POINTS" />
        <GameItemLinks />
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
};

export default GamePoints;
