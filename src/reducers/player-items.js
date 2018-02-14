import { NEW_GAME } from '../actions/new-game';
import { SELECT_ITEM } from '../actions/select-item';

const INITIAL_STATE = { playerItems: [], totalPoints: 0, totalBonus: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_GAME:
      return INITIAL_STATE;
    case SELECT_ITEM:
      let existingItem = state.playerItems.find(playerItem => {
          return playerItem.item.name === action.payload.name;
        }),
        score = 0,
        bonuses = 0;

      if (existingItem) {
        const playerItems = state.playerItems.map(playerItem => {
          if (playerItem.item.name === action.payload.name) {
            const itemScore = playerItem.score + action.payload.point;
            const itemBonus = action.payload.bonusAmount
              ? Math.floor(
                  (playerItem.quantity + 1) / action.payload.selectionsForBonus
                ) * action.payload.bonusAmount
              : 0;

            score += itemScore + itemBonus;
            bonuses += itemBonus;

            return Object.assign({}, playerItem, {
              quantity: playerItem.quantity + 1,
              bonus: itemBonus,
              score: itemScore,
            });
          } else {
            bonuses += playerItem.bonus;
            score += playerItem.score + playerItem.bonus;
          }

          return playerItem;
        });

        return {
          ...state,
          playerItems: playerItems,
          totalPoints: score,
          totalBonus: bonuses,
        };
      } else {
        return {
          ...state,
          playerItems: [
            ...state.playerItems,
            {
              item: action.payload,
              quantity: 1,
              score: action.payload.point,
              bonus: 0,
            },
          ],
          totalPoints: state.totalPoints + action.payload.point,
        };
      }

    default:
      return state;
  }
}
