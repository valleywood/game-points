import { LOAD_ITEMS } from '../actions/load-items';

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_ITEMS:
      return [
        { name: 'A', point: 50, bonusAmount: 50, selectionsForBonus: 3 },
        { name: 'B', point: 30, bonusAmount: 30, selectionsForBonus: 2 },
        { name: 'C', point: 20 },
        { name: 'D', point: 15 },
        { name: 'E', point: 50 },
        { name: 'F', point: 30 },
        { name: 'G', point: 20 },
        { name: 'H', point: 15 },
        { name: 'I', point: 50 },
        { name: 'J', point: 30 },
        { name: 'K', point: 20 },
        { name: 'L', point: 15 },
        { name: 'M', point: 30 },
        { name: 'N', point: 20 },
        { name: 'O', point: 15 },
        { name: 'P', point: 50 },
        { name: 'Q', point: 30 },
        { name: 'R', point: 20 },
        { name: 'S', point: 15 },
      ];
    default:
      return state;
  }
}
