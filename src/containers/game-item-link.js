import { selectItem } from '../actions/select-item';
import { connect } from 'react-redux';
import GameItem from '../components/game-item';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(selectItem(ownProps.item));
    },
  };
}

export default connect(null, mapDispatchToProps)(GameItem);
