import reducer from '../player-items';
import { SELECT_ITEM } from '../../actions/select-item';
const initialState = { playerItems: [], totalBonus: 0, totalPoints: 0 };
const itemA = { name: 'A', point: 50, bonusAmount: 50, selectionsForBonus: 3 };
const itemB = { name: 'B', point: 30, bonusAmount: 10, selectionsForBonus: 2 };

const selectItemAction = {
  type: SELECT_ITEM,
  payload: itemA,
};

describe('SelectItemTest', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle selection of an item', () => {
    expect(
      reducer({ ...initialState }, selectItemAction).playerItems.length
    ).toEqual(1);
  });

  it('should handle selection of two items of the same type', () => {
    let state = reducer({ ...initialState }, selectItemAction);

    expect(reducer(state, selectItemAction).playerItems.length).toEqual(1);
  });

  it('should handle selection of two items of different types', () => {
    let state = reducer({ ...initialState }, selectItemAction);
    selectItemAction.payload = itemB;

    expect(reducer(state, selectItemAction).playerItems.length).toEqual(2);
  });
});
