import React from 'react';
import GamePoints from '../game-points';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('../../containers/game-item-links', () => 'GameItemLinks');
jest.mock('../player', () => 'Player');

it('renders without crashing', () => {
  const renderer = ReactTestRenderer.create(<GamePoints />);
  expect(renderer.toJSON()).toMatchSnapshot();
});
