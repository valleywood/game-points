export const SELECT_ITEM = 'select_item';

export function selectItem(item) {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
}
